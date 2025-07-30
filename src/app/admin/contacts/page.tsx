'use client';

import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '@/config/api';

interface Contact {
  _id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.contacts);
      const data = await response.json();
      
      if (response.ok) {
        setContacts(data);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
          <p className="text-gray-600 mt-2">View and manage contact requests</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <li key={contact._id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {contact.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {contact.company}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {contact.email}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      {contact.message}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Submitted on {new Date(contact.createdAt).toLocaleDateString()} at {new Date(contact.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      contact.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      contact.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
