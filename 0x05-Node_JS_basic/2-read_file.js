const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file content synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the data into lines and filter out empty ones
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length <= 1) {
            throw new Error('No valid student data in the file');
        }

        // Extract headers and data rows
        const headers = lines[0].split(',');
        const students = lines.slice(1);

        // Initialize counters and data storage
        const fieldData = {};
        let totalStudents = 0;

        // Process each student
        for (const student of students) {
            const fields = student.split(',');

            if (fields.length !== headers.length) continue; // Skip malformed lines

            const firstname = fields[0].trim();
            const field = fields[fields.length - 1].trim();

            if (!fieldData[field]) {
                fieldData[field] = [];
            }

            fieldData[field].push(firstname);
            totalStudents += 1;
        }

        // Log the results
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, names] of Object.entries(fieldData)) {
            console.log(
                `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
            );
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
