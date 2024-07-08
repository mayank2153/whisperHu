// scripts/seed.js

import mongoose from 'mongoose';
import {Category} from '../src/models/category.model.js'; // Adjust the path as per your project structure
import connectDB from "../src/config/db.js"
// Define the categories to be seeded
const categories = [
    { name: 'Tech Talk', description: 'Discuss the latest in technology and gadgets' },
    { name: 'Foodie Haven', description: 'Share recipes, restaurant reviews, and culinary adventures' },
    { name: 'Fitness & Wellness', description: 'Tips for healthy living, workouts, and mindfulness' },
    { name: 'Travel Tales', description: 'Share your travel experiences, tips, and destination reviews' },
    { name: 'Creative Corner', description: 'Showcase your art, photography, writing, and DIY projects' },
    { name: 'Green Living', description: 'Eco-friendly tips, sustainable living, and environmental discussions' },
    { name: 'Book Nook', description: 'Book recommendations, reviews, and literary discussions' },
    { name: 'Pet Paradise', description: 'Share cute pet photos, care tips, and animal discussions' },
    { name: 'Music Mania', description: 'Discuss your favorite artists, share playlists, and music news' },
    { name: 'Career & Education', description: 'Professional development, learning resources, and career advice' },
    { name: 'Fashion Forward', description: 'Style tips, fashion trends, and outfit inspirations' },
    { name: 'Gaming Zone', description: 'Video game discussions, reviews, and gaming culture' },
    { name: 'Movie Buffs', description: 'Film reviews, TV show discussions, and entertainment news' },
    { name: 'Science Spotlight', description: 'Share interesting scientific discoveries and discussions' },
    { name: 'Hobby Hub', description: 'Explore various hobbies and share your passion projects' }
];

// Function to connect to MongoDB and seed categories
const seedCategories = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://msachdeva9april:Mayank1234@cluster0.humvsb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // Check if categories exist
        const count = await Category.countDocuments();
        if (count > 0) {
            console.log('Categories already seeded');
            return;
        }

        // Insert categories into the database
        await Category.insertMany(categories);
        console.log('Categories seeded successfully');
    } catch (error) {
        console.error('Error seeding categories:', error);
    } finally {
        // Disconnect mongoose
        mongoose.disconnect();
    }
};

// Execute seeding function
seedCategories();
