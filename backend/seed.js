const mongoose = require('mongoose');

// MongoDB URI
const MONGO_URI = 'mongodb+srv://smartprep_user:smartprep123@centraldb.8wss4ge.mongodb.net/?appName=Centraldb';

async function seedDatabase() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB.');

        const db = mongoose.connection.db;

        console.log('Dropping the entire database to start fresh...');
        await db.dropDatabase();
        console.log('Database dropped successfully.');

        // 1. Users
        console.log('Seeding Users...');
        const usersCollection = db.collection('users');
        const users = [
            {
                name: 'Admin',
                email: 'admin@mmcoe.edu.in',
                password: 'admin@123',
                role: 'admin',
                isAdmin: true,
                isVerified: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Omkar Patil',
                email: 'omkarpatil2023.it@mmcoe.edu.in',
                password: 'password123',
                role: 'student',
                isVerified: true,
                isProfileComplete: true,
                department: 'Information Technology',
                branch: 'Information Technology',
                graduationYear: 2026,
                currentYear: 4,
                college: 'MMCOE',
                interestAreas: ['Software Engineering', 'IT'],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sandip Awale',
                email: 'Sandipawale2023.it@mmcoe.edu.in',
                password: 'password123',
                role: 'student',
                isVerified: true,
                isProfileComplete: true,
                department: 'Computer Engineering',
                branch: 'Computer Engineering',
                graduationYear: 2026,
                currentYear: 4,
                college: 'MMCOE',
                interestAreas: ['Software Engineering', 'Computer Science'],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Prathmesh Khandare',
                email: 'Prathmeshkhandare2023.it@mmcoe.edu.in',
                password: 'password123',
                role: 'alumni',
                isVerified: true,
                isProfileComplete: true,
                department: 'Information Technology',
                branch: 'Information Technology',
                graduationYear: 2024,
                currentPosition: 'Software Engineer',
                company: 'Tech Corp',
                expertiseAreas: ['Web Development', 'System Design'],
                skills: ['JavaScript', 'Node.js', 'React'],
                availabilitySlots: [
                    {
                        date: new Date(Date.now() + 86400000), // Tomorrow
                        startTime: '10:00 AM',
                        endTime: '11:00 AM',
                        isBooked: false
                    }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Shrutika Hibare',
                email: 'Shrutikahibare2023.it@mmcoe.edu.in',
                password: 'password123',
                role: 'alumni',
                isVerified: true,
                isProfileComplete: true,
                department: 'Computer Engineering',
                branch: 'Computer Engineering',
                graduationYear: 2024,
                currentPosition: 'Software Engineer',
                company: 'Tech Corp',
                expertiseAreas: ['Frontend Development', 'UI/UX'],
                skills: ['JavaScript', 'HTML', 'CSS', 'React'],
                availabilitySlots: [
                    {
                        date: new Date(Date.now() + 172800000), // Day after tomorrow
                        startTime: '02:00 PM',
                        endTime: '03:00 PM',
                        isBooked: false
                    }
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        await usersCollection.insertMany(users);

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
}

seedDatabase();
