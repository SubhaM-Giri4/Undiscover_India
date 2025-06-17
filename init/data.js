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
            url: "https://pix10.agoda.net/hotelImages/686952/-1/cf0f881305d251f951aa274f2e18cfbf.png?ca=8&ce=1&s=414x232&ar=16x9"
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
            url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5NjIxNTA3Mzk1Njc3NTE3Mw%3D%3D/original/04cf728d-b9aa-41bd-aee7-d09079c62fe3.jpeg"
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
            url: "https://img1.wsimg.com/isteam/ip/d49cea5a-4513-4b21-b60c-bdde7ee01015/tea%20garden%20resort%20stay%20north%20bengal.jpg/:/cr=t:5.74%25,l:0%25,w:100%25,h:88.52%25"
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
            url: "https://media-cdn.tripadvisor.com/media/photo-s/06/95/df/20/dal-lake.jpg"
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
            url: "https://www.indiaspend.com/h-upload/old_images/342947-western-ghats1440.jpg"
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
            url: "https://lh6.googleusercontent.com/proxy/2bFq5Oi46nQLGQ9dAiu6jrqwsQ-RE8SVWRROPlHa-x7B8l3fghh1w79qhW6xEtp14ADIUJhpR_WK0751tzuOeEnvZAjqlQ2dXuqB32fh97NJ5OibxQAZ7vylmGRVw1JhFuznFx0sSceLaObG6x-lfOyfLA6sO3I=w252-h174-k-no"
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
            url: "https://www.ashextourism.com/hotelsresorts/kerala/images/vanyatreehouse/thouse.jpg"
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
            url: "https://livefreehostels.com/wp-content/uploads/2024/04/1-1024x682.png"
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
            url: "https://www.kamzangjourneys.com/wp-content/uploads/2021/05/Ladakh-Teri-Campsite-Slider.jpg"
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
            url: "https://5.imimg.com/data5/SELLER/Default/2022/5/VJ/GM/GC/148507659/modern-bamboo-house-jagdalpur-charre-marre-waterfalls-sirpur-mainpat-raipur-chhattisgarh.jpg"
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
            url: "https://footloosedev.com/wp-content/uploads/2016/01/bamboo-cottage.jpg"
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
            url: "https://www.rishikeshyogpeeth.com/img/abhayaranya-yoga-ashram.webp"
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
            url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/3e/10/36/facade.jpg?w=900&h=500&s=1"
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
            url: "https://www.tigersafari.net/wp-content/uploads/2024/10/Root-Bridge-870x575.jpg"
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
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZB5cVznF6YYTDLIxOr_NKs-sRogR5O0yvAw&s"
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
            url: "https://www.indiashotels.com/webadmin/hotelgallery/_13286.jpeg"
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
            url: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Balda-Caves-Cover-840x425.jpg"
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
            url: "https://sb.ecobnb.net/app/uploads/sites/3/2020/04/yang-shuo-_Zbbs4muqkQ-unsplash-e1584014705915-1170x490.jpg.webp"
        },
        price: 2400,
        location: "Hunder",
        country: "India"
    }
];

module.exports = { data: sampleListings };
