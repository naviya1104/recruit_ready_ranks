
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  Star, 
  Award, 
  Eye, 
  Download,
  LogOut,
  UserCheck,
  Target,
  Zap
} from 'lucide-react';

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState('candidates');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const recruiterData = {
    name: "Sarah Chen",
    company: "TechCorp Solutions",
    position: "Senior Technical Recruiter"
  };

  const topCandidates = [
    {
      id: 1,
      name: "Alex Johnson",
      university: "MIT",
      graduationYear: "2024",
      overallScore: 95,
      rank: 8,
      skills: ["JavaScript", "Python", "React", "Node.js"],
      completedChallenges: 32,
      averageScore: 91,
      recentActivity: "2 hours ago",
      status: "available"
    },
    {
      id: 2,
      name: "Maria Garcia",
      university: "Stanford",
      graduationYear: "2024",
      overallScore: 93,
      rank: 12,
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      completedChallenges: 28,
      averageScore: 89,
      recentActivity: "1 day ago",
      status: "available"
    },
    {
      id: 3,
      name: "David Kim",
      university: "UC Berkeley",
      graduationYear: "2024",
      overallScore: 91,
      rank: 18,
      skills: ["Java", "Spring", "AWS", "Docker"],
      completedChallenges: 25,
      averageScore: 87,
      recentActivity: "3 days ago",
      status: "interviewing"
    },
    {
      id: 4,
      name: "Emily Chen",
      university: "Carnegie Mellon",
      graduationYear: "2024",
      overallScore: 90,
      rank: 22,
      skills: ["C++", "Algorithms", "System Design", "Rust"],
      completedChallenges: 30,
      averageScore: 88,
      recentActivity: "5 days ago",
      status: "available"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'interviewing':
        return 'bg-yellow-100 text-yellow-800';
      case 'hired':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRankColor = (rank: number) => {
    if (rank <= 10) return 'text-yellow-600';
    if (rank <= 50) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {recruiterData.name}</h1>
                <p className="text-sm text-gray-600">{recruiterData.position} at {recruiterData.company}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">
                Premium Access
              </Badge>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="candidates" className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4" />
              <span>Top Candidates</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Advanced Search</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>Saved Profiles</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Available Candidates</p>
                      <p className="text-2xl font-bold text-blue-600">4,847</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Top 10% Candidates</p>
                      <p className="text-2xl font-bold text-green-600">485</p>
                    </div>
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">New This Week</p>
                      <p className="text-2xl font-bold text-purple-600">127</p>
                    </div>
                    <Zap className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                      <p className="text-2xl font-bold text-orange-600">23</p>
                    </div>
                    <Target className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Top Performing Candidates</span>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search candidates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCandidates.map((candidate) => (
                    <div key={candidate.id} className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                              <p className="text-sm text-gray-600">
                                {candidate.university} • Class of {candidate.graduationYear}
                              </p>
                            </div>
                            <Badge className={getStatusColor(candidate.status)}>
                              {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <div className={`text-2xl font-bold ${getRankColor(candidate.rank)}`}>
                                #{candidate.rank}
                              </div>
                              <div className="text-xs text-gray-600">Global Rank</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">{candidate.overallScore}%</div>
                              <div className="text-xs text-gray-600">Overall Score</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{candidate.completedChallenges}</div>
                              <div className="text-xs text-gray-600">Challenges</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600">{candidate.averageScore}%</div>
                              <div className="text-xs text-gray-600">Avg Score</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {candidate.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <p className="text-sm text-gray-600">Last active: {candidate.recentActivity}</p>
                        </div>

                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download Resume
                          </Button>
                          <Button size="sm" variant="outline">
                            <Star className="h-4 w-4 mr-2" />
                            Shortlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Recruitment Analytics</CardTitle>
                <CardDescription>
                  Insights and metrics about candidate performance and hiring trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard Coming Soon</h3>
                  <p className="text-gray-600">Detailed analytics and insights about candidate performance.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Advanced Search</CardTitle>
                <CardDescription>
                  Find candidates with specific skills, experience, and performance criteria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Search Coming Soon</h3>
                  <p className="text-gray-600">Filter and search candidates by detailed criteria.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Saved Profiles</CardTitle>
                <CardDescription>
                  Candidates you've shortlisted and saved for future reference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Saved Profiles Yet</h3>
                  <p className="text-gray-600">Start shortlisting candidates to see them here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
