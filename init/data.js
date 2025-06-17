const sampleListings = [
    {
        title: "Serene Backwaters Retreat",
        description: "A peaceful stay by the tranquil backwaters of Alleppey, surrounded by lush coconut groves and traditional houseboats.",
        image: {
            filename: "backwaters",
            url: "https://www.tourwings.com/media/packages/0622835373ee7d5e7c975a3213b966ff.jpg"
        },
        price: 1800,
        location: "Alleppey",
        country: "India"
    },
    {
        title: "Desert Camp Experience",
        description: "Sleep under the stars in the golden dunes of Jaisalmer with authentic Rajasthani cuisine and folk performances.",
        image: {
            filename: "desertcamp",
            url: "https://images.unsplash.com/photo-1580980541310-7b1cded7a7fd?auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Himalayan Mountain Cabin",
        description: "Rustic wooden cabin overlooking snow-capped peaks. Ideal for meditation and scenic treks.",
        image: {
            filename: "himalayacabins",
            url: "https://images.unsplash.com/photo-1505480449763-1f8ed1c2f54c?auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Manali",
        country: "India"
    },
    {
        title: "Tea Estate Bungalow",
        description: "Stay amidst rolling tea plantations in this colonial-era bungalow with panoramic views and local cuisine.",
        image: {
            filename: "teaestate",
            url: "https://images.unsplash.com/photo-1559034921-51d1c60e6a1d?auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Munnar",
        country: "India"
    },
    {
        title: "Cultural Stay in Kutch Bhunga",
        description: "Experience authentic Kutchi architecture and arts in a traditional bhunga home in Gujarat’s white desert.",
        image: {
            filename: "kutchhome",
            url: "https://images.unsplash.com/photo-1618502459110-3dc31282bc7f?auto=format&fit=crop&w=800&q=60"
        },
        price: 1400,
        location: "Rann of Kutch",
        country: "India"
    },
    {
        title: "Floating Stay on Dal Lake",
        description: "Traditional wooden houseboat stay on the picturesque Dal Lake with Shikara rides and mountain views.",
        image: {
            filename: "dalhouseboat",
            url: "https://images.unsplash.com/photo-1609263755055-88e64ef47e87?auto=format&fit=crop&w=800&q=60"
        },
        price: 1900,
        location: "Srinagar",
        country: "India"
    },
    {
        title: "Eco-Village in the Western Ghats",
        description: "Off-grid, sustainable eco-living nestled in the lush biodiversity of the Sahyadri hills.",
        image: {
            filename: "ecovillage",
            url: "https://images.unsplash.com/photo-1623068970637-cbe8b8a35dd9?auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Panchgani",
        country: "India"
    },
    {
        title: "French Heritage Villa",
        description: "Charming Indo-French architecture, colored alleys, and cafes just steps away from the beach promenade.",
        image: {
            filename: "pondicherry",
            url: "https://images.unsplash.com/photo-1608702980965-9f4ebd1cc272?auto=format&fit=crop&w=800&q=60"
        },
        price: 1300,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "Forest Treehouse Adventure",
        description: "Live among the treetops with birdsong and jungle trails in Wayanad’s wilderness retreats.",
        image: {
            filename: "wayanadtreehouse",
            url: "https://images.unsplash.com/photo-1608677640773-2e8d9a2dcb52?auto=format&fit=crop&w=800&q=60"
        },
        price: 1700,
        location: "Wayanad",
        country: "India"
    },
    {
        title: "Spiritual Ghatside Homestay",
        description: "A spiritual retreat along the Ganges with rooftop yoga, sunrise Aarti, and ancient alley walks.",
        image: {
            filename: "varanasighat",
            url: "https://images.unsplash.com/photo-1586363104866-7f04e4a3e06b?auto=format&fit=crop&w=800&q=60"
        },
        price: 1100,
        location: "Varanasi",
        country: "India"
    },

    {
        title: "Nomadic Camp in Spiti Valley",
        description: "High-altitude desert charm with yak herders, starry skies, and raw Himalayan beauty.",
        image: {
            filename: "spiticamp",
            url: "https://images.unsplash.com/photo-1603548022191-4621a4c37002?auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Kaza",
        country: "India"
    },
    {
        title: "Tribal Bamboo Cottage",
        description: "A serene bamboo hut crafted by local artisans in the tribal forests of Chhattisgarh.",
        image: {
            filename: "bamboocottage",
            url: "https://images.unsplash.com/photo-1561469374-8c1e8a8b7fd7?auto=format&fit=crop&w=800&q=60"
        },
        price: 1000,
        location: "Jagdalpur",
        country: "India"
    },
    {
        title: "Floating Tents of Majuli",
        description: "Unique stay on the Brahmaputra river, India’s largest river island, with cultural drumming evenings.",
        image: {
            filename: "majulitent",
            url: "https://images.unsplash.com/photo-1613459612532-1e12203ef33b?auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Majuli",
        country: "India"
    },
    {
        title: "Yoga Ashram Stay",
        description: "Find inner peace with guided meditation, organic meals, and views of the Himalayan foothills.",
        image: {
            filename: "rishikeshashram",
            url: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=800&q=60"
        },
        price: 900,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Ancient Stepwell Heritage Homestay",
        description: "Stay beside a 16th-century stepwell and explore royal ruins in a hidden Rajasthan village.",
        image: {
            filename: "stepwellstay",
            url: "https://images.unsplash.com/photo-1602434070431-6c5c258f6e1f?auto=format&fit=crop&w=800&q=60"
        },
        price: 1400,
        location: "Abhaneri",
        country: "India"
    },
    {
        title: "Meghalaya Living Root Lodge",
        description: "Sleep above clouds in an eco-lodge nestled beside living root bridges and waterfalls.",
        image: {
            filename: "meghalayaeco",
            url: "https://images.unsplash.com/photo-1568485688988-7f24f9f53f41?auto=format&fit=crop&w=800&q=60"
        },
        price: 1300,
        location: "Cherrapunji",
        country: "India"
    },
    {
        title: "Terracotta Village House",
        description: "Authentic Bengali terracotta architecture with local potters and serene village ponds.",
        image: {
            filename: "terracottabengal",
            url: "https://images.unsplash.com/photo-1584367360964-9c6bd89d9d1f?auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Bishnupur",
        country: "India"
    },
    {
        title: "Keralan Tharavadu Home",
        description: "Stay in a 100-year-old wooden ancestral home, surrounded by spice plantations and rituals.",
        image: {
            filename: "keralahouse",
            url: "https://images.unsplash.com/photo-1612285973574-72e77bc127fc?auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Kottayam",
        country: "India"
    },
    {
        title: "Rock-Cut Cave Homestay",
        description: "Unique cave dwellings carved into the rock face, preserving tribal lifestyles.",
        image: {
            filename: "odishacaves",
            url: "https://images.unsplash.com/photo-1650896543404-88a50a40b2c7?auto=format&fit=crop&w=800&q=60"
        },
        price: 1300,
        location: "Koraput",
        country: "India"
    },
    {
        title: "Nomad's Yurt in Nubra",
        description: "Cozy yurts of Ladakhi nomads in the sand dunes of a high-altitude cold desert oasis.",
        image: {
            filename: "nubrayurt",
            url: "https://images.unsplash.com/photo-1629194933271-6aeb1be5f3b5?auto=format&fit=crop&w=800&q=60"
        },
        price: 2400,
        location: "Hunder",
        country: "India"
    }
];

module.exports = { data: sampleListings };
