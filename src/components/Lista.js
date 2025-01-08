import React, { useEffect, useState } from 'react';
import WikipediaPreview from "wikipedia-preview"; // 📌 Importerer biblioteket

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

    useEffect(() => {
        WikipediaPreview.init({
            selector: ".wiki-link", // 📌 Aktiverer Wikipedia-popup på alle lenker med denne klassen
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const didrikRecords = records.filter((record) => record.fields.Assignee === "Didrik");
    const helgaRecords = records.filter((record) => record.fields.Assignee === "Helga");

    return (
        <div className="lista-container">
            <List title="Didrik's liste" records={didrikRecords} />
            <List title="Helga's liste" records={helgaRecords} />
        </div>
    );
};

const List = ({ title, records }) => (
    <div className="list-container">
        <h2>{title}</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Navn</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record) => (
                <tr key={record.id}>
                    <td>
                        <a
                            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(record.fields.Name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link"
                        >
                            {record.fields.Name}
                        </a>
                    </td>
                    <td>{record.fields.Status || ""}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default Lista;