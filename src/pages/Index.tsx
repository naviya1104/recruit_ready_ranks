
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Users, TrendingUp, Award, ArrowRight, BookOpen, UserCheck, GraduationCap } from 'lucide-react';

const Index = () => {
  const [userType, setUserType] = useState<'student' | 'recruiter' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              CodeTalent Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The premier platform connecting top coding talent with leading tech companies. 
              Students showcase their skills, recruiters discover exceptional developers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/student-login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Student Portal
                </Button>
              </Link>
              <Link to="/recruiter-login">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Recruiter Portal
                </Button>
              </Link>
              <Link to="/mentor-login">
                <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Mentor Portal
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Coding Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Students solve real-world coding problems from HackerEarth and other platforms, 
                  showcasing their problem-solving abilities and technical skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Comprehensive tracking of coding performance, skill progression, and detailed 
                  analytics to help students and recruiters make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Top Talent Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Companies identify and recruit the highest-performing candidates based on 
                  objective coding metrics and comprehensive skill assessments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1200+</div>
              <div className="text-gray-600">Successful Hires</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-6">Join thousands of students, mentors and companies already using CodeTalent Hub</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student-login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started as Student <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/recruiter-login">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                  Find Talent <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/mentor-login">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                  Mentor Students <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
