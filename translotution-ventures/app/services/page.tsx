'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Check, ArrowRight, Calendar, MapPin } from 'lucide-react';

// Structuring all details from the shared DOCX files
const packageGroups = [
  {
    groupTitle: "Kenya Collections",
    groupSubtitle: "Private savannah circuits, coastal getaways, and pristine rift lakes.",
    packages: [
      {
        id: "K5",
        title: "Nairobi • Maasai Mara • Lake Naivasha",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600",
        summary: "An intensive five-day circuit introducing Nairobi's sanctuaries, the endless plains of the Mara, and a scenic boat safari on Naivasha.",
        itinerary: [
          {
            day: "Day 1 | Discover Nairobi",
            bulletPoints: [
              "Breakfast overlooking Nairobi National Park",
              "Nairobi National Park game drive",
              "Visit the David Sheldrick Elephant Orphanage",
              "Lunch at Tamarind Restaurant",
              "Shopping experience",
              "Dinner at Carnivore Restaurant",
              "Overnight at Ole Sereni Hotel"
            ]
          },
          {
            day: "Day 2 | Fly to Maasai Mara",
            bulletPoints: [
              "Visit the Giraffe Centre",
              "Scenic flight to Maasai Mara",
              "Afternoon game drive",
              "Overnight at Sarova Mara Game Camp"
            ]
          },
          {
            day: "Day 3 | Experience the Mara",
            bulletPoints: [
              "Sunrise Big Five game drive",
              "Optional Hot Air Balloon Safari",
              "Maasai Cultural Village visit",
              "Evening game drive"
            ]
          },
          {
            day: "Day 4 | Explore the Mara",
            bulletPoints: [
              "Full-day safari with picnic lunch",
              "Mara River experience",
              "Crocodile & hippo viewing",
              "Sunset in the savannah"
            ]
          },
          {
            day: "Day 5 | Lake Naivasha",
            bulletPoints: [
              "Scenic drive to Lake Naivasha",
              "Boat safari",
              "Bush sundowner experience",
              "Overnight at Lake Naivasha Sopa Resort"
            ]
          }
        ]
      },
      {
        id: "K7",
        title: " Nairobi • Maasai Mara • Lake Naivasha • Hell's Gate",
        duration: "7 Days",
        image: "safari.jpg",
        summary: "Combine private savannah game drives with cycling through volcanic gorges and soaking in hot geothermal pools.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Nairobi",
            bulletPoints: [
              "Nairobi National Park game tracking",
              "David Sheldrick Elephant Orphanage",
              "Tamarind Lunch",
              "Carnivore Dinner"
            ]
          },
          {
            day: "Day 2 | Nairobi to Mara",
            bulletPoints: [
              "Giraffe Centre visit",
              "Scenic flight to Maasai Mara",
              "Afternoon game drive"
            ]
          },
          {
            day: "Day 3 | Mara Predator Tracking",
            bulletPoints: [
              "Big Five Safari",
              "Optional Balloon Safari over the plains",
              "Maasai Village experience",
              "Evening Game Drive"
            ]
          },
          {
            day: "Day 4 | Full-Day Mara Safari",
            bulletPoints: [
              "Full-day Mara Safari with experienced guides",
              "Mara River Walk to track crocodiles & hippos",
              "Sunset wilderness experience"
            ]
          },
          {
            day: "Day 5 | Naivasha Transfer",
            bulletPoints: [
              "Transfer to Lake Naivasha",
              "Scenic boat Safari observing birdlife",
              "Bush Sundowner by the lakeshore"
            ]
          },
          {
            day: "Day 6 | Hell's Gate National Park",
            bulletPoints: [
              "Hell's Gate National Park entry",
              "Cycling Safari past grazing zebras",
              "Guided Gorge Walk",
              "Olkaria Geothermal Spa mineral soak"
            ]
          },
          {
            day: "Day 7 | Plantations & City Tour",
            bulletPoints: [
              "Scenic drive through lush tea & coffee plantations",
              "Nairobi city tour",
              "Souvenir shopping",
              "Farewell dinner at Carnivore Restaurant"
            ]
          }
        ]
      },
      {
        id: "K10",
        title: " Nairobi • Maasai Mara • Amboseli • Diani Beach",
        duration: "10 Days",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=600",
        summary: "Witness giant elephant herds in Amboseli with Mt. Kilimanjaro views, concluding with pristine white sands at Diani Beach.",
        itinerary: [
          {
            day: "Day 1 | Nairobi Sights",
            bulletPoints: [
              "Nairobi National Park game track",
              "David Sheldrick Elephant Orphanage",
              "Tamarind Lunch",
              "Carnivore Dinner"
            ]
          },
          {
            day: "Day 2 | Fly to Mara",
            bulletPoints: [
              "Giraffe Centre visit",
              "Scenic flight to Maasai Mara"
            ]
          },
          {
            day: "Day 3 | The Big Five Track",
            bulletPoints: [
              "Big Five Safari",
              "Balloon Safari (Optional)",
              "Maasai Village cultural visit"
            ]
          },
          {
            day: "Day 4 | Mara Wilderness Exploration",
            bulletPoints: [
              "Full-day Maasai Mara Safari with picnic lunch"
            ]
          },
          {
            day: "Day 5 | Amboseli Arrival",
            bulletPoints: [
              "Flight to Amboseli National Park",
              "Afternoon game drive",
              "Overnight at Ol Tukai Lodge"
            ]
          },
          {
            day: "Day 6 | Amboseli Exploration",
            bulletPoints: [
              "Full-day Amboseli Safari",
              "Mount Kilimanjaro views",
              "Elephant tracking",
              "Bird watching"
            ]
          },
          {
            day: "Day 7 | Coast Bound Transit",
            bulletPoints: [
              "Transfer to Emali",
              "SGR Train to Mombasa",
              "Transfer to Diani Beach"
            ]
          },
          {
            day: "Day 8 | Kongo River Paddle",
            bulletPoints: [
              "Kongo River Canoe Experience",
              "Beach relaxation by the Indian Ocean"
            ]
          },
          {
            day: "Day 9 | Wasini Island Excursion",
            bulletPoints: [
              "Wasini Island Dolphin Excursion",
              "Snorkelling & local Seafood Experience"
            ]
          },
          {
            day: "Day 10 | Return Flight",
            bulletPoints: [
              "Leisure morning by the beach",
              "Flight back to Nairobi"
            ]
          }
        ]
      },
      {
        id: "K14",
        title: " Nairobi • Maasai Mara • Amboseli • Tsavo West • Tsavo East • Diani Beach",
        duration: "14 Days",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=600",
        summary: "The ultimate 14-day Kenyan grand tour spanning Maasai Mara, Amboseli, both Tsavo reserves, and a tropical finish in Diani.",
        itinerary: [
          {
            day: "Day 1 | Nairobi Arrivals",
            bulletPoints: [
              "Nairobi National Park game track",
              "David Sheldrick Elephant Orphanage",
              "Tamarind Restaurant Lunch",
              "Carnivore Dinner"
            ]
          },
          {
            day: "Day 2 | Flight to the Mara",
            bulletPoints: [
              "Giraffe Centre visit",
              "Scenic flight to Maasai Mara"
            ]
          },
          {
            day: "Day 3 | Mara Cultural Experience",
            bulletPoints: [
              "Big Five Safari",
              "Optional Balloon Safari",
              "Maasai Village Experience"
            ]
          },
          {
            day: "Day 4 | Rivers & Savannahs",
            bulletPoints: [
              "Full-day Maasai Mara Safari",
              "Mara River Exploration observing crocodiles & hippos"
            ]
          },
          {
            day: "Day 5 | Amboseli Transit",
            bulletPoints: [
              "Flight to Amboseli National Park",
              "Afternoon Game Drive",
              "Overnight at Ol Tukai Lodge"
            ]
          },
          {
            day: "Day 6 | Mount Kilimanjaro Foot",
            bulletPoints: [
              "Full-day Amboseli Safari",
              "Kilimanjaro views",
              "Elephant herds tracking",
              "Nature photography"
            ]
          },
          {
            day: "Day 7 | Tsavo West Arrival",
            bulletPoints: [
              "Scenic drive to Tsavo West National Park",
              "Afternoon game drive",
              "Shetani Lava Flow geological walk",
              "Overnight at Kilaguni Serena Lodge"
            ]
          },
          {
            day: "Day 8 | Springs & Sanctuaries",
            bulletPoints: [
              "Mzima Springs underwater viewing chamber",
              "Rhino Sanctuary visit",
              "Full-day Tsavo West exploration"
            ]
          },
          {
            day: "Day 9 | Tsavo East Arrival",
            bulletPoints: [
              "Transfer to Tsavo East National Park",
              "Afternoon game drive",
              "Overnight at Voi Safari Lodge"
            ]
          },
          {
            day: "Day 10 | Red Elephants of Tsavo",
            bulletPoints: [
              "Full-day Tsavo East Safari",
              "Aruba Dam tracking",
              "Famous red elephants viewing",
              "Sunset game drive"
            ]
          },
          {
            day: "Day 11 | Train to the Coast",
            bulletPoints: [
              "Morning game drive",
              "SGR Train to Mombasa",
              "Transfer to Diani Beach"
            ]
          },
          {
            day: "Day 12 | Coast Relaxation",
            bulletPoints: [
              "Kongo River Canoe Adventure",
              "Beach leisure on the white sands"
            ]
          },
          {
            day: "Day 13 | Wasini Marine Excursion",
            bulletPoints: [
              "Wasini Island Dolphin Tour",
              "Marine park snorkelling",
              "Swahili seafood lunch"
            ]
          },
          {
            day: "Day 14 | Final Flight",
            bulletPoints: [
              "Relaxation at the beach",
              "Flight to Nairobi"
            ]
          }
        ]
      }
    ]
  },
  {
    groupTitle: "East Africa Collections",
    groupSubtitle: "Multi-country routes spanning gorilla tracking, crater descents, and the historic streets of Stone Town.",
    packages: [
      {
        id: "EA7",
        title:  "Rwanda & Kenya Safari",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
        summary: "An evocative cross-border experience connecting gorilla tracking in Volcanoes National Park with private game tracking in Maasai Mara.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Kigali",
            bulletPoints: [
              "Arrival at Kigali International Airport",
              "Meet & greet by your safari guide",
              "Kigali City Tour",
              "Visit the Kigali Genocide Memorial",
              "Local arts, crafts and cultural experiences",
              "Overnight in Kigali"
            ]
          },
          {
            day: "Day 2 | Volcanoes National Park",
            bulletPoints: [
              "Scenic drive through Rwanda's rolling hills",
              "Visit local communities",
              "Twin Lakes sightseeing",
              "Cultural Village Experience",
              "Overnight near Volcanoes National Park"
            ]
          },
          {
            day: "Day 3 | Gorilla Trekking Adventure",
            bulletPoints: [
              "Early morning gorilla trekking briefing",
              "Guided trek through Volcanoes National Park",
              "One-hour encounter with a mountain gorilla family",
              "Photography opportunities",
              "Relaxation at the lodge"
            ]
          },
          {
            day: "Day 4 | Flight to Nairobi",
            bulletPoints: [
              "Flight from Kigali to Nairobi",
              "Visit the Giraffe Centre",
              "Visit the David Sheldrick Elephant Orphanage",
              "Dinner at the Famous Carnivore Restaurant",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 5 | Journey to Maasai Mara",
            bulletPoints: [
              "Scenic drive through the Great Rift Valley",
              "Stopover at Narok Town",
              "Afternoon game drive tracking the Big Five",
              "Sunset in the Mara",
              "Overnight at a safari lodge"
            ]
          },
          {
            day: "Day 6 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Full-day game drive",
              "Big Five wildlife viewing",
              "Great Wildebeest Migration (Seasonal)",
              "Hippo Pool visit",
              "Picnic lunch in the wilderness",
              "Maasai Cultural Experience",
              "Overnight at the safari lodge"
            ]
          },
          {
            day: "Day 7 | Return to Nairobi & Departure",
            bulletPoints: [
              "Optional morning game drive",
              "Scenic drive back to Nairobi",
              "Great Rift Valley viewpoints",
              "Last-minute souvenir shopping",
              "Airport transfer"
            ]
          }
        ]
      },
      {
        id: "EA8",
        title: " Kenya & Tanzania Safari",
        duration: "8 Days",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
        summary: "Follow the paths of migration across Maasai Mara, the infinite Serengeti Plains, and down the Ngorongoro Crater floor.",
        itinerary: [
          {
            day: "Day 1 | Maasai Mara National Reserve",
            bulletPoints: [
              "Scenic drive to the iconic Maasai Mara",
              "Afternoon game drive across the reserve",
              "Search for the Big Five",
              "Spectacular savannah landscapes",
              "Sunset in the Mara",
              "Overnight at Amani Mara Camp"
            ]
          },
          {
            day: "Day 2 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Full-day game drive",
              "Big Five wildlife viewing",
              "Great Wildebeest Migration (Seasonal)",
              "Black-maned lions and cheetahs tracking",
              "Birdwatching with over 500 species",
              "Picnic lunch in the wilderness",
              "Overnight at Amani Mara Camp"
            ]
          },
          {
            day: "Day 3 | Another Maasai Mara Adventure",
            bulletPoints: [
              "Sunrise game drive",
              "Track predators in action",
              "Explore different sections of the reserve",
              "Incredible wildlife photography",
              "Relaxing evening at the camp",
              "Overnight at Amani Mara Camp"
            ]
          },
          {
            day: "Day 4 | Maasai Mara to Serengeti",
            bulletPoints: [
              "Morning game drive in Maasai Mara",
              "Cross the Kenya–Tanzania border",
              "Optional visit to Olduvai Gorge",
              "Scenic drive into Serengeti National Park",
              "Evening wildlife viewing",
              "Overnight at Meliá Serengeti Lodge"
            ]
          },
          {
            day: "Day 5 | Serengeti Safari Experience",
            bulletPoints: [
              "Full-day unlimited game drives",
              "Explore the endless Serengeti Plains",
              "Search for lions, cheetahs and elephants",
              "Great Migration viewing (Seasonal)",
              "Spectacular African sunsets",
              "Overnight at Meliá Serengeti Lodge"
            ]
          },
          {
            day: "Day 6 | Discover the Serengeti",
            bulletPoints: [
              "Morning and afternoon game drives",
              "Spot large predator populations",
              "Encounter zebras, wildebeest and gazelles",
              "Exceptional birdwatching opportunities",
              "Luxury lodge experience",
              "Overnight at Meliá Serengeti Lodge"
            ]
          },
          {
            day: "Day 7 | Serengeti to Ngorongoro",
            bulletPoints: [
              "Sunrise game drive",
              "Scenic drive to Ngorongoro Conservation Area",
              "Visit the world-famous Ngorongoro Crater",
              "Sundowner overlooking the crater rim",
              "Overnight at Ngorongoro Lion's Paw Camp"
            ]
          },
          {
            day: "Day 8 | Ngorongoro Crater Safari",
            bulletPoints: [
              "Early morning descent into the crater",
              "Search for the rare Black Rhino",
              "Big Five wildlife viewing",
              "Hippo Lake picnic lunch",
              "Scenic drive back to Arusha",
              "End of your East African Safari"
            ]
          }
        ]
      },
      {
        id: "EA10",
        title: "Uganda & Kenya Safari",
        duration: "10 Days",
        image: "uganda.jpg",
        summary: "Experience a double gorilla track in Uganda's Bwindi Forest before flying to Kenya for premier Big Five and predator safaris.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Uganda",
            bulletPoints: [
              "Arrival at Entebbe International Airport",
              "Meet & greet with your safari guide",
              "Transfer to your hotel",
              "Relax by Lake Victoria",
              "Overnight at Imperial Hotel"
            ]
          },
          {
            day: "Day 2 | Fly to Bwindi – Gorilla Gateway",
            bulletPoints: [
              "Scenic domestic flight to Bwindi",
              "Transfer to your forest lodge",
              "Optional Batwa Cultural Experience",
              "Overnight near Bwindi Impenetrable National Park"
            ]
          },
          {
            day: "Day 3 | Gorilla Trekking Adventure",
            bulletPoints: [
              "Early morning gorilla trekking briefing",
              "Guided trek through Bwindi Forest",
              "One-hour encounter with a mountain gorilla family",
              "Picnic lunch in the forest",
              "Relaxation at the lodge"
            ]
          },
          {
            day: "Day 4 | Second Gorilla Trek",
            bulletPoints: [
              "Second gorilla tracking experience",
              "Discover another gorilla family",
              "Birdwatching and forest wildlife",
              "Relax and unwind at the lodge"
            ]
          },
          {
            day: "Day 5 | Return to Entebbe",
            bulletPoints: [
              "Scenic domestic flight to Entebbe",
              "Optional Shoebill Excursion",
              "Lake Victoria views",
              "Flight to Nairobi",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 6 | Nairobi Experience",
            bulletPoints: [
              "Visit the Nairobi National Museum",
              "Shopping at the Maasai Market",
              "Dinner at the Famous Carnivore Restaurant",
              "Night game drive at Nairobi National Park",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 7 | Journey to Maasai Mara",
            bulletPoints: [
              "Scenic drive through the Great Rift Valley",
              "Stopover in Narok Town",
              "Traditional Maasai Village visit",
              "Check-in at Sarova Mara Game Camp",
              "Evening campfire experience"
            ]
          },
          {
            day: "Day 8 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Full-day game drive",
              "Search for the Big Five",
              "Witness the Great Migration (Seasonal)",
              "Visit the Hippo Pool",
              "Picnic lunch in the wilderness",
              "Overnight at Sarova Mara Game Camp"
            ]
          },
          {
            day: "Day 9 | Final Maasai Mara Safari",
            bulletPoints: [
              "Morning game drive",
              "Track the Big Cats",
              "Golden-hour wildlife photography",
              "Optional spa or lodge relaxation",
              "Farewell bush dinner"
            ]
          },
          {
            day: "Day 10 | Departure",
            bulletPoints: [
              "Breakfast at the lodge",
              "Scenic drive back to Nairobi",
              "Great Rift Valley photo stops",
              "Optional lunch in Nairobi",
              "Airport transfer"
            ]
          }
        ]
      },
      {
        id: "EA14",
        title: " Ethiopia, Uganda & Kenya Safari",
        duration: "14 Days",
        image: "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&q=80&w=600",
        summary: "A sprawling cross-continental voyage spanning Addis Ababa's cultural markets, gorilla trekking in Uganda, and premier Kenya safaris.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Addis Ababa",
            bulletPoints: [
              "Airport meet & greet and hotel check-in",
              "Guided Addis Ababa City Tour",
              "National Museum (Home of Lucy)",
              "Piazza District exploration",
              "Shiromeda Cultural Market",
              "Ethiopian street food tasting",
              "Rooftop dinner with live cultural entertainment",
              "Overnight at Skylight Hotel"
            ]
          },
          {
            day: "Day 2 | Addis Ababa Cultural Experience",
            bulletPoints: [
              "Holy Trinity Cathedral visit",
              "Entoto Hill panoramic views",
              "Traditional Ethiopian Coffee Ceremony",
              "Authentic Ethiopian lunch",
              "Scenic drive to Bishoftu",
              "Resort relaxation at Kuriftu Resort"
            ]
          },
          {
            day: "Day 3 | Bishoftu Lakes Experience",
            bulletPoints: [
              "Crater Lakes Tour",
              "Boat ride on Lake Bishoftu",
              "Visit Lake Hora & Lake Babogaya",
              "Lakeside picnic",
              "Ethiopian cooking class to prepare Injera, Tibs & Shiro",
              "Overnight in Addis Ababa"
            ]
          },
          {
            day: "Day 4 | Welcome to Uganda",
            bulletPoints: [
              "Arrival in Entebbe",
              "Hotel transfer",
              "Leisure by Lake Victoria",
              "Overnight at Papyrus Hotel"
            ]
          },
          {
            day: "Day 5 | Fly to Bwindi",
            bulletPoints: [
              "Scenic domestic flight",
              "Transfer to Bwindi Impenetrable Forest",
              "Optional Batwa Cultural Experience",
              "Forest lodge stay"
            ]
          },
          {
            day: "Day 6 | Gorilla Trekking Experience",
            bulletPoints: [
              "Guided mountain gorilla trek",
              "Meet an endangered gorilla family",
              "One-hour gorilla encounter",
              "Picnic lunch in the forest",
              "Relaxation at the lodge"
            ]
          },
          {
            day: "Day 7 | Second Gorilla Trek",
            bulletPoints: [
              "Second gorilla tracking adventure",
              "Explore another gorilla family",
              "Birdwatching & Forest relaxation"
            ]
          },
          {
            day: "Day 8 | Return to Entebbe",
            bulletPoints: [
              "Domestic flight back to Entebbe",
              "Optional Shoebill Experience",
              "Lake Victoria views",
              "Flight to Nairobi",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 9 | Nairobi Experience",
            bulletPoints: [
              "Nairobi National Museum",
              "Maasai Market shopping",
              "Dinner at Carnivore Restaurant",
              "Night game drive at Nairobi National Park",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 10 | Journey to Maasai Mara",
            bulletPoints: [
              "Scenic Great Rift Valley drive",
              "Narok stopover",
              "Maasai Village cultural experience",
              "Check-in at Sarova Mara Game Camp",
              "Campfire evening"
            ]
          },
          {
            day: "Day 11 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Full-day game drive",
              "Search for the Big Five",
              "Great Migration (Seasonal)",
              "Hippo Pool visit",
              "Picnic lunch in the wilderness",
              "Overnight at Sarova Mara Game Camp"
            ]
          },
          {
            day: "Day 12 | Final Safari Experience",
            bulletPoints: [
              "Morning Big Cat game drive",
              "Search for lion prides",
              "Golden-hour wildlife photography",
              "Optional spa and relaxation",
              "Farewell bush dinner"
            ]
          },
          {
            day: "Day 13 | Return to Nairobi",
            bulletPoints: [
              "Scenic drive back to Nairobi",
              "Great Rift Valley landscapes",
              "Optional lunch en route",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 14 | Departure",
            bulletPoints: [
              "Breakfast at the hotel",
              "Last-minute shopping (optional)",
              "Airport transfer",
              "End of your East Africa Safari"
            ]
          }
        ]
      }
    ]
  },
  {
    groupTitle: "Great Africa Collections",
    groupSubtitle: "Comprehensive, multi-regional safaris spanning East and Southern Africa's iconic routes.",
    packages: [
      {
        id: "GA12",
        title: " Great Africa Safari",
        duration: "12 Days",
        image: "africa2.jpg",
        summary: "A spectacular twelve-day overland journey combining Rwandan mountain gorillas, Kenya's Maasai Mara, and Zimbabwe's Victoria Falls.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Kigali",
            bulletPoints: [
              "Arrival at Kigali International Airport",
              "Meet & greet by your safari guide",
              "Kigali City Tour",
              "Visit the Kigali Genocide Memorial",
              "Local arts, crafts and cultural experiences",
              "Overnight in Kigali"
            ]
          },
          {
            day: "Day 2 | Volcanoes National Park",
            bulletPoints: [
              "Scenic drive through Rwanda's rolling hills",
              "Twin Lakes sightseeing",
              "Cultural Village Experience",
              "Visit local communities",
              "Overnight near Volcanoes National Park"
            ]
          },
          {
            day: "Day 3 | Gorilla Trekking Adventure",
            bulletPoints: [
              "Early morning gorilla trekking briefing",
              "Guided mountain gorilla trek",
              "One-hour gorilla encounter",
              "Relaxation at the lodge",
              "Overnight near Volcanoes National Park"
            ]
          },
          {
            day: "Day 4 | Flight to Nairobi",
            bulletPoints: [
              "Flight to Nairobi",
              "Visit the Giraffe Centre",
              "David Sheldrick Elephant Orphanage",
              "Dinner at Carnivore Restaurant",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 5 | Nairobi Wildlife & Culture",
            bulletPoints: [
              "Nairobi National Museum",
              "Maasai Market shopping",
              "Optional Nairobi National Park game drive",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 6 | Journey to Maasai Mara",
            bulletPoints: [
              "Scenic Great Rift Valley drive",
              "Narok stopover",
              "Afternoon game drive",
              "Search for the Big Five",
              "Overnight at a safari lodge"
            ]
          },
          {
            day: "Day 7 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Sunrise to sunset game drive",
              "Great Migration (Seasonal)",
              "Hippo Pool visit",
              "Maasai Cultural Village",
              "Picnic lunch in the wilderness",
              "Overnight at the safari lodge"
            ]
          },
          {
            day: "Day 8 | Maasai Mara Adventure",
            bulletPoints: [
              "Morning game drive",
              "Big Cat tracking",
              "Wildlife photography",
              "Bush sundowner experience",
              "Overnight at the safari lodge"
            ]
          },
          {
            day: "Day 9 | Tea Plantation Experience",
            bulletPoints: [
              "Return to Nairobi",
              "Visit scenic tea plantations",
              "Tea tasting experience",
              "Farm-to-table lunch",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 10 | Arrival at Victoria Falls",
            bulletPoints: [
              "Flight to Victoria Falls",
              "Sunset Zambezi River Cruise",
              "Wildlife viewing",
              "Overnight in Victoria Falls"
            ]
          },
          {
            day: "Day 11 | Victoria Falls Experience",
            bulletPoints: [
              "Guided Victoria Falls Tour",
              "Rainforest walk",
              "Local craft markets",
              "Optional helicopter flight",
              "Overnight in Victoria Falls"
            ]
          },
          {
            day: "Day 12 | Adventure & Departure",
            bulletPoints: [
              "Optional Devil's Pool or adventure activities",
              "Leisure morning",
              "Airport transfer"
            ]
          }
        ]
      },
      {
        id: "GA14",
        title: " Great Africa Safari",
        duration: "14 Days",
        image: "mt.jpg",
        summary: "A classic two-week exploration from Nairobi and Maasai Mara, to Victoria Falls, concluding along Cape Town's spectacular coastlines.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Nairobi",
            bulletPoints: [
              "Arrival in Nairobi",
              "Giraffe Centre visit",
              "David Sheldrick Elephant Orphanage",
              "Carnivore Restaurant Dinner",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 2 | Nairobi Experience",
            bulletPoints: [
              "Nairobi National Museum",
              "Maasai Market shopping",
              "Optional Nairobi National Park drive",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 3 | Journey to Maasai Mara",
            bulletPoints: [
              "Great Rift Valley viewpoints",
              "Narok stopover",
              "Afternoon game drive",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 4 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Big Five game drive",
              "Great Migration (Seasonal)",
              "Hippo Pool visit",
              "Picnic lunch in the wilderness",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 5 | Maasai Mara Experience",
            bulletPoints: [
              "Sunrise game drive",
              "Big Cat tracking",
              "Maasai Village visit",
              "Bush sundowner",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 6 | Lake Naivasha & Elementaita",
            bulletPoints: [
              "Boat ride on Lake Naivasha",
              "Crescent Island walking safari",
              "Birdwatching",
              "Overnight at Lake Elementaita"
            ]
          },
          {
            day: "Day 7 | Lake Elementaita Experience",
            bulletPoints: [
              "Flamingo viewing (Seasonal)",
              "Nature walks",
              "Leisure at the lodge",
              "Overnight at Lake Elementaita"
            ]
          },
          {
            day: "Day 8 | Tea Plantation Experience",
            bulletPoints: [
              "Scenic drive to Nairobi",
              "Tea plantation tour",
              "Tea tasting",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 9 | Arrival at Victoria Falls",
            bulletPoints: [
              "Flight to Victoria Falls",
              "Zambezi Sunset Cruise",
              "Overnight in Victoria Falls"
            ]
          },
          {
            day: "Day 10 | Victoria Falls Experience",
            bulletPoints: [
              "Guided Falls Tour",
              "Local markets",
              "Optional helicopter flight",
              "Overnight in Victoria Falls"
            ]
          },
          {
            day: "Day 11 | Adventure at Victoria Falls",
            bulletPoints: [
              "Optional adventure activities",
              "Leisure afternoon",
              "Overnight in Victoria Falls"
            ]
          },
          {
            day: "Day 12 | Arrival in Cape Town",
            bulletPoints: [
              "Flight to Cape Town",
              "Table Mountain exploration (weather permitting)",
              "V&A Waterfront dining",
              "Overnight in Cape Town"
            ]
          },
          {
            day: "Day 13 | Cape Peninsula Tour",
            bulletPoints: [
              "Cape of Good Hope hike",
              "Boulders Penguin Colony visit",
              "Chapman's Peak Drive scenic photo stops",
              "Overnight in Cape Town"
            ]
          },
          {
            day: "Day 14 | Cape Town & Departure",
            bulletPoints: [
              "Wine estate tour or final city tour",
              "Shopping",
              "Airport transfer"
            ]
          }
        ]
      },
      {
        id: "GA18",
        title: "Great Africa Safari",
        duration: "18 Days",
        image: "africa1.jpg",
        summary: "The ultimate 18-day trans-national epic spanning Ethiopian cultural heritage, Kenya's great reserves, Serengeti and Ngorongoro, and Zanzibar.",
        itinerary: [
          {
            day: "Day 1 | Welcome to Addis Ababa",
            bulletPoints: [
              "City tour",
              "National Museum",
              "Cultural dinner",
              "Overnight in Addis Ababa"
            ]
          },
          {
            day: "Day 2 | Ethiopian Heritage",
            bulletPoints: [
              "Holy Trinity Cathedral",
              "Entoto Hills panoramic view",
              "Ethiopian Coffee Ceremony",
              "Bishoftu excursion",
              "Overnight in Addis Ababa"
            ]
          },
          {
            day: "Day 3 | Bishoftu Lakes Experience",
            bulletPoints: [
              "Crater lakes tour",
              "Scenic boat ride",
              "Ethiopian cooking class",
              "Overnight in Addis Ababa"
            ]
          },
          {
            day: "Day 4 | Arrival in Nairobi",
            bulletPoints: [
              "Flight to Nairobi",
              "Giraffe Centre visit",
              "David Sheldrick Elephant Orphanage",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 5 | Nairobi Experience",
            bulletPoints: [
              "Nairobi National Museum",
              "Maasai Market shopping",
              "Carnivore Restaurant dinner",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 6 | Journey to Maasai Mara",
            bulletPoints: [
              "Great Rift Valley views",
              "Afternoon game drive",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 7 | Full-Day Maasai Mara Safari",
            bulletPoints: [
              "Big Five safari",
              "Great Migration (Seasonal)",
              "Maasai Village visit",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 8 | Maasai Mara Adventure",
            bulletPoints: [
              "Sunrise game drive",
              "Wildlife photography",
              "Bush breakfast",
              "Overnight at safari lodge"
            ]
          },
          {
            day: "Day 9 | Lake Naivasha Experience",
            bulletPoints: [
              "Boat safari",
              "Crescent Island walking safari",
              "Overnight at Lake Naivasha"
            ]
          },
          {
            day: "Day 10 | Lake Elementaita",
            bulletPoints: [
              "Flamingo viewing (Seasonal)",
              "Nature walks",
              "Relaxation at the lodge",
              "Overnight at Lake Elementaita"
            ]
          },
          {
            day: "Day 11 | Tea Plantation Experience",
            bulletPoints: [
              "Scenic tea plantation tour",
              "Tea tasting",
              "Return to Nairobi",
              "Overnight in Nairobi"
            ]
          },
          {
            day: "Day 12 | Serengeti National Park",
            bulletPoints: [
              "Cross into Tanzania",
              "Afternoon game drive",
              "Overnight in Serengeti"
            ]
          },
          {
            day: "Day 13 | Full-Day Serengeti Safari",
            bulletPoints: [
              "Unlimited game drives",
              "Big Five viewing",
              "Great Migration (Seasonal)",
              "Overnight in Serengeti"
            ]
          },
          {
            day: "Day 14 | Serengeti to Ngorongoro",
            bulletPoints: [
              "Morning game drive",
              "Ngorongoro Conservation Area transit",
              "Overnight at crater lodge"
            ]
          },
          {
            day: "Day 15 | Ngorongoro Crater Safari",
            bulletPoints: [
              "Crater game drive",
              "Black Rhino search",
              "Return to Arusha",
              "Overnight in Arusha"
            ]
          },
          {
            day: "Day 16 | Arrival in Zanzibar",
            bulletPoints: [
              "Flight to Zanzibar",
              "Stone Town exploration",
              "Sunset at the beach",
              "Overnight in Zanzibar"
            ]
          },
          {
            day: "Day 17 | Zanzibar Beach Experience",
            bulletPoints: [
              "Snorkelling in crystal waters",
              "Spice Farm Tour",
              "White sand beaches relaxation",
              "Overnight in Zanzibar"
            ]
          },
          {
            day: "Day 18 | Leisure & Departure",
            bulletPoints: [
              "Relaxation by the Indian Ocean",
              "Optional dolphin excursion",
              "Airport transfer"
            ]
          }
        ]
      }
    ]
  }
];

export default function Services() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="py-16">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-luxury-dark text-luxury-white py-24 text-center px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-luxury-accent mb-4 font-semibold font-sans">Our Collections</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight">
          Signature Safaris for <span className="italic">every travel duration.</span>
        </h1>
      </section>

      {/* 2. CORE INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="font-serif text-base md:text-lg font-light text-luxury-medium leading-relaxed">
          Translotution Ventures brings you premium, multi-day routes curated directly from the ground up. Explore our dedicated geographic groupings below to begin planning.
        </p>
      </section>

      {/* 3. DYNAMIC GROUPED PACKAGES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        {packageGroups.map((group) => (
          <div key={group.groupTitle} className="border-t border-luxury-border pt-16">
            
            {/* Group Header */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-luxury-dark mb-2">{group.groupTitle}</h2>
              <p className="text-sm text-luxury-medium font-serif font-light">{group.groupSubtitle}</p>
            </div>

            {/* Packages Grid inside Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {group.packages.map((pkg) => {
                const isOpen = activeAccordion === pkg.id;
                return (
                  <div key={pkg.id} className="group border border-luxury-border bg-luxury-white overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* Visual Card Cover */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-luxury-dark">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-95" 
                      />
                      <span className="absolute top-4 left-4 bg-luxury-dark text-luxury-white px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-semibold">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-8 space-y-6">
                      <div>
                        <h3 className="font-serif text-2xl font-light text-luxury-dark mb-4">{pkg.title}</h3>
                        <p className="text-xs text-luxury-medium font-serif leading-relaxed font-light mb-6">
                          {pkg.summary}
                        </p>
                      </div>

                      {/* Interactive Accordion Trigger */}
                      <button 
                        onClick={() => toggleAccordion(pkg.id)}
                        className="w-full border-t border-b border-luxury-border border-opacity-60 py-4 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-luxury-dark hover:text-luxury-accent transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-luxury-accent" />
                          {isOpen ? "Close Daily Itinerary" : "Explore Day-by-Day Itinerary"}
                        </span>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {/* Accordion Content (Comprehensive day-by-day itinerary) */}
                      {isOpen && (
                        <div className="pt-4 border-b border-luxury-border pb-6 space-y-6 animate-fade-in">
                          {pkg.itinerary.map((dayLog) => (
                            <div key={dayLog.day} className="space-y-2">
                              <h4 className="font-serif text-sm font-semibold text-luxury-dark tracking-wide flex items-center gap-2">
                                <MapPin size={12} className="text-luxury-accent" />
                                {dayLog.day}
                              </h4>
                              <ul className="pl-4 space-y-1.5">
                                {dayLog.bulletPoints.map((bp, bpIdx) => (
                                  <li key={bpIdx} className="text-[11px] text-luxury-medium font-serif font-light flex items-start gap-2">
                                    <span className="text-luxury-accent select-none">•</span>
                                    <span>{bp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Request Form Link */}
                      <div className="pt-2">
                        <Link 
                          href="/contact" 
                          className="flex items-center text-xs tracking-widest uppercase font-semibold text-luxury-dark hover:text-luxury-accent transition-colors"
                        >
                          Begin Booking Inquiry <ArrowRight size={12} className="ml-2" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </section>

      {/* 4. CUSTOMIZATION COMMITMENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-luxury-white border-t border-luxury-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-luxury-accent font-semibold block">Tailored Frameworks</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-dark">Customize Your Expedition</h2>
          <p className="text-xs text-luxury-medium font-serif leading-relaxed font-light max-w-2xl mx-auto">
            These structured collections represent starting parameters based on our expertise across East and Southern Africa. You hold full authority to choose specific travel dates, adjust accommodation standards, add activities, and alter the duration to suit your preferences and budget.
          </p>
          <div className="pt-6">
            <Link 
              href="/contact"
              className="bg-luxury-dark text-luxury-white hover:bg-luxury-accent hover:text-luxury-dark px-10 py-4 text-xs tracking-widest uppercase transition-colors font-semibold inline-block"
            >
              Consult with Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}