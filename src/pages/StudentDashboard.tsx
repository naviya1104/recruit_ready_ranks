
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Trophy, 
  TrendingUp, 
  BookOpen, 
  User, 
  FileText, 
  Settings, 
  LogOut,
  Target,
  Clock,
  Award,
  Star
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, this would come from API
  const studentData = {
    name: "Alex Johnson",
    university: "MIT",
    graduationYear: "2024",
    overallScore: 87,
    rank: 45,
    totalStudents: 5000,
    completedChallenges: 24,
    totalChallenges: 35,
    skills: [
      { name: "JavaScript", level: 92, color: "from-yellow-400 to-orange-500" },
      { name: "Python", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 78, color: "from-green-400 to-green-600" },
      { name: "SQL", level: 82, color: "from-purple-400 to-purple-600" }
    ],
    recentChallenges: [
      { name: "Binary Tree Traversal", score: 95, difficulty: "Medium", date: "2 days ago", status: "completed" },
      { name: "Dynamic Programming", score: 87, difficulty: "Hard", date: "5 days ago", status: "completed" },
      { name: "Graph Algorithms", score: 0, difficulty: "Hard", date: "Today", status: "in-progress" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {studentData.name}</h1>
                <p className="text-sm text-gray-600">{studentData.university} • Class of {studentData.graduationYear}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                Rank #{studentData.rank}
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
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center space-x-2">
              <Code2 className="h-4 w-4" />
              <span>Challenges</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Performance Overview */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>Performance Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Overall Score</span>
                        <span className="text-2xl font-bold text-blue-600">{studentData.overallScore}%</span>
                      </div>
                      <Progress value={studentData.overallScore} className="h-3" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{studentData.completedChallenges}</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">#{studentData.rank}</div>
                        <div className="text-sm text-gray-600">Rank</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">Top 1%</div>
                        <div className="text-sm text-gray-600">Percentile</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    <span>Next Goal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">Top 30</div>
                      <div className="text-sm text-gray-600">Target Rank</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Goal</span>
                        <span className="font-medium">73%</span>
                      </div>
                      <Progress value={73} className="h-2" />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View Action Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Overview */}
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Skill Proficiency</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentData.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Challenges */}
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>Recent Challenges</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.recentChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          challenge.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          {challenge.status === 'completed' ? (
                            <Award className="h-5 w-5 text-green-600" />
                          ) : (
                            <Clock className="h-5 w-5 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{challenge.name}</div>
                          <div className="text-sm text-gray-600">
                            {challenge.difficulty} • {challenge.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {challenge.status === 'completed' ? (
                          <div className="text-lg font-bold text-green-600">{challenge.score}%</div>
                        ) : (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            In Progress
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Coding Challenges</CardTitle>
                <CardDescription>
                  Complete coding challenges to improve your ranking and showcase your skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Code2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Challenges Coming Soon</h3>
                  <p className="text-gray-600">The coding challenge interface will be available here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Profile Management</CardTitle>
                <CardDescription>
                  Update your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Editor Coming Soon</h3>
                  <p className="text-gray-600">Manage your profile details, preferences, and experience here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Resume Builder</CardTitle>
                <CardDescription>
                  Create and manage your professional resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Resume Builder Coming Soon</h3>
                  <p className="text-gray-600">Build and customize your resume with your coding achievements.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Settings Panel Coming Soon</h3>
                  <p className="text-gray-600">Configure your account settings and preferences here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
