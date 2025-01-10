import React, { useEffect, useState } from 'react';
import WikipediaPreview from "wikipedia-preview";

const AIRTABLE_BASE_ID = "appi8crh09YOurdZJ";
const AIRTABLE_TABLE_NAME = "tblCs0kBDHcEhQGrj";
const AIRTABLE_API_KEY = "patf1Z9GrpUKz4D7Z.fd030b8522ef0c16d259ecdf63e5559075c2f615ed41136f92f42952fc2da7e7\n";

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
                    throw new Error("Klarte ikke å laste data fra databasen");
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
        setTimeout(() => {
            WikipediaPreview.init({
                selector: ".wiki-preview",
                lang: "no"
            });
        }, 500);
    }, [records]);

    if (loading) return <p>Laster...</p>;
    if (error) return <p>Feil: {error}</p>;

    const sortByName = (a, b) => {
        const nameA = a.fields.Name.toLowerCase();
        const nameB = b.fields.Name.toLowerCase();
        return nameA.localeCompare(nameB); // 📌 Alfabetisk sortering
    };

    const didrikRecords = records
        .filter((record) => record.fields.Assignee === "Didrik")
        .sort(sortByName);

    const helgaRecords = records
        .filter((record) => record.fields.Assignee === "Helga")
        .sort(sortByName);

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
                            <span
                                className="wiki-preview"
                                data-wikipedia-preview={record.fields.Name}
                            >
                                {record.fields.Name}
                            </span>
                    </td>
                    <td>{record.fields.Status || ""}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default Lista;