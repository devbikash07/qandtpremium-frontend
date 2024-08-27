import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://example.com/path-to-ceo-image.jpg', // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://example.com/path-to-cto-image.jpg', // Replace with actual image URL
  },
  {
    name: 'Robert Johnson',
    position: 'CFO',
    image: 'https://example.com/path-to-cfo-image.jpg', // Replace with actual image URL
  },
  {
    name: 'Emily Davis',
    position: 'COO',
    image: 'https://example.com/path-to-coo-image.jpg', // Replace with actual image URL
  },
  // Add more team members here
];

function OurTeam() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[40rem]">
        <img
          src="https://example.com/path-to-header-image.jpg" // Replace with actual header image URL
          alt="Team Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Our Team Leadership</h1>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-lg text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
