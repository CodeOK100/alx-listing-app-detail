# 🏡 Property Detail Page – Responsive Real Estate UI

This milestone implements a **responsive Property Detail Page** using **Next.js, Tailwind CSS, and reusable React components**.  
The page dynamically displays property information, booking options, and reviews based on the property selected.

---

## 📌 Objective
The goal of this task is to:
- Build a **Property Detail Page** from a provided mockup.
- Use **dynamic routing** in Next.js (`pages/property/[id].tsx`).
- Create **reusable UI components** for property details, booking, and reviews.
- Style the layout with **Tailwind CSS** for full responsiveness.

---

## 🛠️ Features Implemented

### **1. Dynamic Property Page**
- Built at `pages/property/[id].tsx`.
- Dynamically fetches property data using the `id` from the route.
- Renders a detail page if property exists, else shows `Property not found`.

### **2. Property Detail Component**
📄 `components/property/PropertyDetail.tsx`

- Displays property name, rating, and location.  
- Responsive grid of property images.  
- Tabs for:
  - **What we offer**  
  - **Reviews**  
  - **About host**  
- Shows list of amenities & services.  

### **3. Booking Section**
📄 `components/property/BookingSection.tsx`

- Displays nightly price.  
- Check-in and Check-out date pickers.  
- Calculates **total payment** (`price × number of nights`).  
- "Reserve now" button.  

### **4. Review Section**
📄 `components/property/ReviewSection.tsx`

- Maps through an array of reviews.  
- Displays:
  - Reviewer’s profile picture.  
  - Name and rating (with stars).  
  - Review text.  

---

## 🎨 Styling
- Implemented fully with **Tailwind CSS**.  
- Mobile-first, responsive layout.  
- Grid & flexbox used for image gallery, amenities, and sections.  

---

## ⚡ Technologies Used
- **Next.js** (dynamic routing, SSR/SSG)
- **React** (component-based architecture)
- **TypeScript** (type safety with interfaces)
- **Tailwind CSS** (utility-first styling)
- **React Icons** (for stars and icons)



