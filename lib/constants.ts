export const HOTEL = {
  name: "Hotel Surya Beach Inn",
  tagline: "Your Beachside Retreat in Puri, Odisha",
  description:
    "Established in 2003, our 29-room inn offers cozy stays near Puri's Golden Beach. Enjoy hospitable service, natural light-filled spacious rooms with AC, TV, WiFi, and in-house kitchen. Family-friendly with kids' activities.",
  address:
    "Chakra Tirtha Road, Near Blue Flag Beach, Infront of Mayfair Hotel, Baliguali, Puri, Odisha 752002, India",
  phone: "+91 6752-229113",
  email: "hotelsuryabeach@gmail.com",
  whatsapp: "916752229113",
  checkIn: "9:00 AM",
  checkOut: "8:00 AM",
  established: 2003,
  totalRooms: 29,
  bookingUrl:
    "https://www.makemytrip.com/hotels/hotel_surya_beach_inn-details-puri.html",
  coordinates: { lat: 19.7992269, lng: 85.8340403 },
  mapsUrl: "https://maps.app.goo.gl/7wnEbPQp6ATkmmqC6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d85.8314654!3d19.7992319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c5a220c7203b%3A0xf74b38d8d688af5d!2sHotel%20Surya%20Beach%20Inn!5e0!3m2!1sen!2sin!4v1",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

// Replace these with your real hotel media assets when available.
export const PLACEHOLDER_MEDIA = {
  heroVideo:
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  heroPoster:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  aboutExterior:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80",
  roomStandard:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  roomDeluxe:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
} as const;

export interface RoomEnvironment {
  breeze: { level: number; maxLevel: number; label: string };
  lighting: { level: number; maxLevel: number; label: string };
  noise: { level: number; maxLevel: number; label: string; dbRange: string };
}

export interface Room {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  image: string;
  environment: RoomEnvironment;
}

export const ROOMS: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description:
      "Comfortable and spacious rooms with natural light, perfect for couples and solo travelers. Enjoy a restful stay with all essential amenities and a private balcony overlooking the garden.",
    priceRange: "₹2,000 – ₹3,000 / night",
    features: ["AC", "TV", "Free WiFi", "Balcony View", "Room Service", "Fan"],
    image: PLACEHOLDER_MEDIA.roomStandard,
    environment: {
      breeze: { level: 3, maxLevel: 5, label: "Moderate" },
      lighting: { level: 3, maxLevel: 5, label: "Clear" },
      noise: { level: 3, maxLevel: 5, label: "Soothing", dbRange: "45 – 50 dB" },
    },
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description:
      "Upgraded rooms with additional space, a kitchenette, and premium bath amenities including a bathtub. Ideal for families seeking extra comfort during their Puri getaway.",
    priceRange: "₹3,000 – ₹4,000 / night",
    features: [
      "AC",
      "TV",
      "Free WiFi",
      "Kitchenette",
      "Bathtub",
      "Room Service",
      "Balcony",
    ],
    image: PLACEHOLDER_MEDIA.roomDeluxe,
    environment: {
      breeze: { level: 4, maxLevel: 5, label: "Fresh" },
      lighting: { level: 5, maxLevel: 5, label: "Panoramic" },
      noise: { level: 2, maxLevel: 5, label: "Whisper", dbRange: "40 – 45 dB" },
    },
  },
];

export interface Amenity {
  icon: string;
  label: string;
  category: "essential" | "comfort" | "family" | "wellness";
}

export const AMENITIES: Amenity[] = [
  { icon: "Wifi", label: "Free WiFi", category: "essential" },
  { icon: "Car", label: "Free Parking", category: "essential" },
  { icon: "Coffee", label: "Breakfast", category: "essential" },
  { icon: "UtensilsCrossed", label: "Restaurant", category: "comfort" },
  { icon: "ConciergeBell", label: "Room Service", category: "comfort" },
  { icon: "Briefcase", label: "Business Center", category: "comfort" },
  { icon: "Snowflake", label: "AC Rooms", category: "comfort" },
  { icon: "CookingPot", label: "Kitchenette", category: "family" },
  { icon: "Baby", label: "Family Friendly", category: "family" },
  { icon: "Gamepad2", label: "Kids Activities", category: "family" },
  { icon: "Sparkles", label: "Spa", category: "wellness" },
  { icon: "Stethoscope", label: "Doctor on Call", category: "wellness" },
  { icon: "ShieldCheck", label: "24/7 Security", category: "essential" },
  { icon: "Zap", label: "Power Backup", category: "essential" },
  { icon: "WashingMachine", label: "Laundry", category: "comfort" },
  { icon: "Phone", label: "Front Desk 24/7", category: "essential" },
];

export interface Landmark {
  name: string;
  distance: string;
  walkTime?: string;
  driveTime?: string;
  category: "temple" | "beach" | "food" | "transport" | "shopping";
  coordinates: { lat: number; lng: number };
}

export const LANDMARKS: Landmark[] = [
  {
    name: "Jagannath Temple",
    distance: "2.7 km",
    driveTime: "8 min",
    walkTime: "32 min",
    category: "temple",
    coordinates: { lat: 19.8048, lng: 85.8182 },
  },
  {
    name: "Golden Beach (Niladri)",
    distance: "0.5 km",
    walkTime: "5 min",
    category: "beach",
    coordinates: { lat: 19.7963, lng: 85.8275 },
  },
  {
    name: "Blue Flag Beach",
    distance: "0.8 km",
    walkTime: "10 min",
    category: "beach",
    coordinates: { lat: 19.7943, lng: 85.829 },
  },
  {
    name: "Puri Railway Station",
    distance: "3.2 km",
    driveTime: "10 min",
    category: "transport",
    coordinates: { lat: 19.8026, lng: 85.8312 },
  },
  {
    name: "Kanchi Ganesha Temple",
    distance: "1.5 km",
    walkTime: "18 min",
    driveTime: "5 min",
    category: "temple",
    coordinates: { lat: 19.8015, lng: 85.822 },
  },
  {
    name: "Chung Wah Restaurant",
    distance: "1.2 km",
    walkTime: "15 min",
    driveTime: "4 min",
    category: "food",
    coordinates: { lat: 19.8005, lng: 85.826 },
  },
  {
    name: "Wildgrass Restaurant",
    distance: "1.0 km",
    walkTime: "12 min",
    driveTime: "3 min",
    category: "food",
    coordinates: { lat: 19.799, lng: 85.825 },
  },
];

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    quote:
      "Wonderful location just steps from the beach! The staff were incredibly friendly and helpful. Rooms were clean and spacious. Will definitely visit again.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Priya Sharma",
    quote:
      "Perfect family getaway. Kids loved being so close to the beach. The in-house restaurant served delicious home-style food. Great value for money!",
    rating: 4,
    date: "Dec 2025",
  },
  {
    name: "Amit Patel",
    quote:
      "The best budget hotel near Golden Beach in Puri. AC rooms are well-maintained, WiFi works great. Walking distance to all attractions.",
    rating: 4,
    date: "Nov 2025",
  },
  {
    name: "Sneha Mohanty",
    quote:
      "Stayed for 3 nights during Rath Yatra. Excellent hospitality, the owner personally ensured we were comfortable. Natural light in the rooms was beautiful.",
    rating: 5,
    date: "Oct 2025",
  },
  {
    name: "Vikram Singh",
    quote:
      "Clean rooms, great location, and the sunrise from the nearby beach is unforgettable. Staff arranged a temple visit for us. Highly recommended!",
    rating: 5,
    date: "Sep 2025",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    alt: "Hotel exterior with tropical landscaping",
    category: "exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Standard room with comfortable bed and natural light",
    category: "rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Deluxe room with modern amenities",
    category: "rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Golden Beach sunrise near the hotel",
    category: "beach",
  },
  {
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80",
    alt: "Sunset over Bay of Bengal from the beach",
    category: "beach",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Restaurant serving local Odia cuisine",
    category: "dining",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Hotel room with balcony view",
    category: "rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80",
    alt: "Puri beach with waves and blue sky",
    category: "beach",
  },
];

export const ENVIRONMENT_DATA = {
  breeze: {
    title: "Ocean Breeze",
    rating: "Fresh Sea Breeze",
    level: 4,
    maxLevel: 5,
    stops: ["Calm", "Light", "Moderate", "Fresh", "Breezy"],
    description:
      "Enjoy refreshing coastal winds year-round. Best during October to February when cool sea breezes make evenings delightful.",
    bestSeason: "Oct – Feb",
  },
  sunrise: {
    title: "Sunrise Visibility",
    rating: "Golden Hour Direct",
    level: 5,
    maxLevel: 5,
    stops: ["Partial", "Filtered", "Clear", "Bright", "Panoramic"],
    description:
      "East-facing rooms get direct sunrise over the Bay of Bengal. Wake up to golden hues painting the sky every morning.",
    bestTime: "5:30 – 6:15 AM",
  },
  ambiance: {
    title: "Beach Ambiance",
    rating: "Soothing Waves",
    level: 3,
    maxLevel: 5,
    dbRange: "45 – 50 dB",
    stops: ["Silent", "Whisper", "Soothing", "Lively", "Vibrant"],
    description:
      "Gentle wave sounds create a natural white noise. Minimal traffic ensures peaceful nights and calm mornings.",
  },
};
