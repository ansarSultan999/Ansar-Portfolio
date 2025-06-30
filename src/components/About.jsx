import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces"
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: "Collaboration",
      description: "Working effectively in agile development teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated developer with a passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                 With 2 years of hands-on experience as a Frontend Developer, I specialize in building responsive, user-friendly web applications using modern frameworks and tools. My journey started with a passion for visual design and interactivity, which quickly grew into a deep commitment to writing clean, efficient code and creating seamless user experiences.  
              </p>
              <p>
I focus on crafting interfaces that are not only functional but intuitive and engaging. Outside of development, I enjoy exploring the latest in frontend technologies, optimizing UI performance, and staying connected with the tech community through learning and collaboration.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'HTML5', 'React', 'Wordpress', 'Bootstrap', 'Next js','Tailwind CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Experience & Education Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold text-gray-900"> Web And App Develper</div>
                  <div className="text-xs text-gray-400">2023 - Present</div>
                  <div className="text-gray-700 text-sm mt-1">
                    Saylani SMIT/Course,Batch 11 <br />
Bahadrabad,Karachi
                  </div>
                </li>
                <li>
                  <div className="font-semibold text-gray-900">2024 Internship</div>
                  <div className="text-xs text-gray-400">2024 - 2024</div>
                  <div className="text-gray-700 text-sm mt-1">
                    Bci New Media <br />
Shahrah E Faisal,Karachi
                  </div>
                  </li>
                   <li>
                  <div className="font-semibold text-gray-900">Company</div>
                  <div className="text-xs text-gray-400">2025</div>
                  <div className="text-gray-700 text-sm mt-1">
                   working as a Frontend Developer in Arteontechnology Company
                  </div>
                </li>
              </ul>
            </div>
            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold text-gray-900">Matric</div>
                  {/* <div className="text-sm text-gray-600">Virtual University of Pakistan</div> */}
                  <div className="text-xs text-gray-400">2018 - 2019 </div>
                  <div className="text-gray-700 text-sm mt-1">
                   Bio Science <br />
Sargodha,Punjab
                  </div>
                </li>
                <li>
                  <div className="font-semibold text-gray-900"> Intermediate</div>
                  {/* <div className="text-sm text-gray-600">Punjab College</div> */}
                  <div className="text-xs text-gray-400">2020 - 2021</div>
                  <div className="text-gray-700 text-sm mt-1">
                    Inter Computer Science <br />
Sargodha, Punjab
                  </div>
                </li>
              </ul>
            </div>
            {/* Spacer for 3rd column on large screens */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;