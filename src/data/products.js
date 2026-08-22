const Products = [
  // 👗 DRESSES
  {
    id: 1,
    name: "Elegant Maxi Dress",
    category: "Dresses",
    color: "Black",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description:
      "An elegant maxi dress with a comfortable fit, perfect for parties and special occasions.",
    rating: 4.9,
  },

  {
    id: 2,
    name: "Floral Summer Dress",
    category: "Dresses",
    color: "Floral",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    description:
      "A beautiful floral dress designed for a fresh and comfortable summer look.",
    rating: 4.8,
  },

  {
    id: 3,
    name: "Casual Midi Dress",
    category: "Dresses",
    color: "Blue",
    price: 58,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish midi dress suitable for casual outings and everyday wear.",
    rating: 4.7,
  },

  // 👚 TOPS
  {
    id: 4,
    name: "Classic Headphone",
    category: "Top",
    color: "White",
    price: 35,
    image:
      "/Headphone.jpg",
    description:
      "A simple and beautifull Headphone.",
    rating: 4.6,
  },

  {
    id: 5,
    name: "Elegant Satin Top",
    category: "Tops",
    color: "Pink",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
    description:
      "A beautiful satin top with a soft finish and elegant appearance.",
    rating: 4.8,
  },

  {
    id: 6,
    name: "Casual Crop Top",
    category: "Tops",
    color: "Black",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80",
    description:
      "A modern casual top designed for a comfortable everyday outfit.",
    rating: 4.5,
  },

  // 👕 T-SHIRTS
  {
    id: 7,
    name: "Basic Ladies Tee",
    category: "T-Shirts",
    color: "Black",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable everyday t-shirt with a simple and modern design.",
    rating: 4.7,
  },

  {
    id: 8,
    name: "Premium White Tee",
    category: "T-Shirts",
    color: "White",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
    description:
      "A premium white t-shirt made for everyday comfort and casual styling.",
    rating: 4.8,
  },

  // 👖 JEANS
  {
    id: 9,
    name: "High Waist Jeans",
    category: "Jeans",
    color: "Blue",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic high-waist jeans with a modern fit and comfortable denim fabric.",
    rating: 4.8,
  },

  {
    id: 10,
    name: "Straight Leg Jeans",
    category: "Jeans",
    color: "Light Blue",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    description:
      "Classic straight-leg jeans designed for everyday outfits.",
    rating: 4.7,
  },

  // 🧥 JACKETS
  {
    id: 11,
    name: "Denim Jacket",
    category: "Jackets",
    color: "Blue",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    description:
      "A timeless denim jacket that adds a stylish layer to any outfit.",
    rating: 4.8,
  },

  {
    id: 12,
    name: "Elegant Blazer",
    category: "Jackets",
    color: "Black",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80",
    description:
      "A sophisticated blazer perfect for office wear and formal occasions.",
    rating: 4.9,
  },

  // 👡 SANDALS
  {
    id: 13,
    name: "Classic Ladies Sandals",
    category: "Sandals",
    color: "Brown",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable and stylish sandals designed for everyday summer wear.",
    rating: 4.7,
  },

  {
    id: 14,
    name: "Strappy Sandals",
    category: "Sandals",
    color: "Beige",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant strappy sandals with a stylish design for special occasions.",
    rating: 4.8,
  },

  {
    id: 15,
    name: "Comfort Flat Sandals",
    category: "Sandals",
    color: "Black",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
    description:
      "Lightweight flat sandals designed for comfortable everyday walking.",
    rating: 4.6,
  },

  // 👠 HEELS
  {
    id: 16,
    name: "Classic High Heels",
    category: "Heels",
    color: "Black",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant high heels designed for parties, events and formal outfits.",
    rating: 4.8,
  },

  {
    id: 17,
    name: "Elegant Pink Heels",
    category: "Heels",
    color: "Pink",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=800&q=80",
    description:
      "Beautiful pink heels with an elegant design for special occasions.",
    rating: 4.7,
  },

  // 💍 JEWELLERY
  {
    id: 18,
    name: "Gold Necklace",
    category: "Jewellery",
    color: "Gold",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description:
      "A delicate gold-tone necklace that adds elegance to your outfit.",
    rating: 4.9,
  },

  {
    id: 19,
    name: "Pearl Earrings",
    category: "Jewellery",
    color: "Pearl",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant pearl earrings suitable for both casual and formal occasions.",
    rating: 4.8,
  },

  {
    id: 20,
    name: "Fashion Bracelet",
    category: "Jewellery",
    color: "Gold",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish bracelet designed to complement your everyday look.",
    rating: 4.6,
  },

  {
    id: 21,
    name: "Minimal Ring Set",
    category: "Jewellery",
    color: "Silver",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description:
      "A beautiful set of minimal rings with a modern and elegant design.",
    rating: 4.7,
  },

  // 💄 COSMETICS
  {
    id: 22,
    name: "Matte Lipstick",
    category: "Cosmetics",
    color: "Rose",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    description:
      "A smooth matte lipstick with a beautiful everyday shade.",
    rating: 4.8,
  },

  {
    id: 23,
    name: "Makeup Brush Set",
    category: "Cosmetics",
    color: "Pink",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description:
      "A complete set of makeup brushes for everyday beauty routines.",
    rating: 4.7,
  },

  {
    id: 24,
    name: "Beauty Palette",
    category: "Cosmetics",
    color: "Multi",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    description:
      "A versatile beauty palette with a selection of stylish shades.",
    rating: 4.8,
  },

  {
    id: 25,
    name: "Cosmetic Pouch",
    category: "Cosmetics",
    color: "Pink",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact cosmetic pouch for keeping your beauty essentials organized.",
    rating: 4.6,
  },

  // 👜 BAGS
  {
    id: 26,
    name: "Classic Handbag",
    category: "Bags",
    color: "Brown",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish handbag with a classic design for everyday use.",
    rating: 4.9,
  },

  {
    id: 27,
    name: "Mini Shoulder Bag",
    category: "Bags",
    color: "Black",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact shoulder bag perfect for carrying your daily essentials.",
    rating: 4.7,
  },

  {
    id: 28,
    name: "Elegant Tote Bag",
    category: "Bags",
    color: "Beige",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    description:
      "A spacious tote bag combining elegance and everyday practicality.",
    rating: 4.8,
  },

  // 🧣 SCARVES
  {
    id: 29,
    name: "Silk Scarf",
    category: "Scarves",
    color: "Pink",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    description:
      "A soft and elegant scarf that adds a stylish finishing touch.",
    rating: 4.7,
  },

  // 👛 WALLETS
  {
    id: 30,
    name: "Ladies Wallet",
    category: "Wallets",
    color: "Black",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact and stylish wallet designed to keep your essentials organized.",
    rating: 4.8,
  },
];

export default Products;















