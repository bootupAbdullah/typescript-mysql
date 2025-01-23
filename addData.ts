import connectToDatabase from "./database";

async function addData(title: string, description: string) {
    const connection = await connectToDatabase();
    try {
        const [rows] = await connection.execute(
            'INSERT INTO tutorials (title, description, published) VALUES (?, ?,)',
            [title, description]
        );
        console.log('Data added: ', rows);
    } catch (error) {
        console.error('Failed to add data: ', error);
    } finally {
        await connection.end();
    }
}

addData('New Title', 'New Description');