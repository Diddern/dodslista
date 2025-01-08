import React, { useEffect, useState } from 'react';

const AIRTABLE_BASE_ID = "appi8crh09YOurdZJ"; // Sett inn din Base ID
const AIRTABLE_TABLE_NAME = "tblCs0kBDHcEhQGrj"; // Sett inn ditt tabellnavn
const AIRTABLE_API_KEY = "patf1Z9GrpUKz4D7Z.fd030b8522ef0c16d259ecdf63e5559075c2f615ed41136f92f42952fc2da7e7\n"; // Sett inn din API-nøkkel
const Lista = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAirtableData = async () => {
            try {
                const response = await fetch(
                    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
                    {
                        headers: {
                            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data from Airtable");
                }

                const data = await response.json();
                setRecords(data.records);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAirtableData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // 🔹 Filtrer dataene for hver assignee
    const didrikRecords = records.filter((record) => record.fields.Assignee === "Didrik");
    const helgaRecords = records.filter((record) => record.fields.Assignee === "Helga");

    return (
        <div style={styles.container}>
            <List title="Didrik's liste" records={didrikRecords} />
            <List title="Helga's liste" records={helgaRecords} />
        </div>
    );
};

// 🔹 Listekomponent med tabell
const List = ({ title, records }) => (
    <div style={styles.listContainer}>
        <h2>{title}</h2>
        <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.th}>Navn</th>
                <th style={styles.th}>Status</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record) => (
                <tr key={record.id}>
                    <td style={styles.td}>{record.fields.Name}</td>
                    <td style={styles.td}>{record.fields.Status || ""}</td> {/* Setter tomt felt hvis ingen status */}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

// 🔹 CSS-styling for tabellen
const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px",
    },
    listContainer: {
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "5px",
        background: "#f9f9f9",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px",
    },
    th: {
        background: "#e0e0e0",
        padding: "10px",
        textAlign: "left",
        borderBottom: "2px solid #ccc",
    },
    td: {
        padding: "8px",
        borderBottom: "1px solid #ddd",
    },
};

export default Lista;