import { Store } from '@/lib/types';

export const stores: Store[] = [
  {
    id: '1',
    name: 'TechHub Downtown',
    address: '123 Tech Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '(415) 555-0123',
    lat: 37.7749,
    lng: -122.4194,
    hours: {
      'Monday': '9:00 AM - 9:00 PM',
      'Tuesday': '9:00 AM - 9:00 PM',
      'Wednesday': '9:00 AM - 9:00 PM',
      'Thursday': '9:00 AM - 9:00 PM',
      'Friday': '9:00 AM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '11:00 AM - 8:00 PM'
    }
  },
  {
    id: '2',
    name: 'TechHub Union Square',
    address: '456 Market Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94108',
    phone: '(415) 555-0456',
    lat: 37.7879,
    lng: -122.4075,
    hours: {
      'Monday': '10:00 AM - 8:00 PM',
      'Tuesday': '10:00 AM - 8:00 PM',
      'Wednesday': '10:00 AM - 8:00 PM',
      'Thursday': '10:00 AM - 8:00 PM',
      'Friday': '10:00 AM - 9:00 PM',
      'Saturday': '10:00 AM - 9:00 PM',
      'Sunday': '12:00 PM - 6:00 PM'
    }
  },
  {
    id: '3',
    name: 'TechHub Silicon Valley',
    address: '789 Innovation Drive',
    city: 'Palo Alto',
    state: 'CA',
    zipCode: '94301',
    phone: '(650) 555-0789',
    lat: 37.4419,
    lng: -122.1430,
    hours: {
      'Monday': '9:00 AM - 9:00 PM',
      'Tuesday': '9:00 AM - 9:00 PM',
      'Wednesday': '9:00 AM - 9:00 PM',
      'Thursday': '9:00 AM - 9:00 PM',
      'Friday': '9:00 AM - 9:00 PM',
      'Saturday': '10:00 AM - 8:00 PM',
      'Sunday': '11:00 AM - 7:00 PM'
    }
  },
  {
    id: '4',
    name: 'TechHub Los Angeles',
    address: '321 Sunset Boulevard',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90028',
    phone: '(323) 555-0321',
    lat: 34.0522,
    lng: -118.2437,
    hours: {
      'Monday': '10:00 AM - 9:00 PM',
      'Tuesday': '10:00 AM - 9:00 PM',
      'Wednesday': '10:00 AM - 9:00 PM',
      'Thursday': '10:00 AM - 9:00 PM',
      'Friday': '10:00 AM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '11:00 AM - 8:00 PM'
    }
  },
  {
    id: '5',
    name: 'TechHub New York',
    address: '567 Broadway',
    city: 'New York',
    state: 'NY',
    zipCode: '10012',
    phone: '(212) 555-0567',
    lat: 40.7128,
    lng: -74.0060,
    hours: {
      'Monday': '9:00 AM - 10:00 PM',
      'Tuesday': '9:00 AM - 10:00 PM',
      'Wednesday': '9:00 AM - 10:00 PM',
      'Thursday': '9:00 AM - 10:00 PM',
      'Friday': '9:00 AM - 11:00 PM',
      'Saturday': '10:00 AM - 11:00 PM',
      'Sunday': '11:00 AM - 9:00 PM'
    }
  }
];