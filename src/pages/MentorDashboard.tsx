
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  Star, 
  Award, 
  Eye, 
  BookOpen,
  LogOut,
  UserCheck,
  BarChart3,
  Calendar,
  MessageSquare,
  Target,
  Clock
} from 'lucide-react';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const mentorData = {
    name: "Dr. Sarah Wilson",
    college: "Stanford University",
    department: "Computer Science",
    position: "Associate Professor"
  };

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      rollNumber: "CS2024001",
      year: "Final Year",
      semester: "8th",
      overallScore: 95,
      globalRank: 8,
      completedAssignments: 32,
      pendingAssignments: 3,
      averageScore: 91,
      lastActivity: "2 hours ago",
      status: "active",
      mentorNotes: "Excellent problem-solving skills"
    },
    {
      id: 2,
      name: "Maria Garcia",
      rollNumber: "CS2024002",
      year: "Final Year",
      semester: "8th",
      overallScore: 88,
      globalRank: 15,
      completedAssignments: 28,
      pendingAssignments: 7,
      averageScore: 85,
      lastActivity: "1 day ago",
      status: "active",
      mentorNotes: "Strong in algorithms, needs work on system design"
    },
    {
      id: 3,
      name: "David Kim",
      rollNumber: "CS2024003",
      year: "Final Year",
      semester: "8th",
      overallScore: 82,
      globalRank: 28,
      completedAssignments: 25,
      pendingAssignments: 10,
      averageScore: 80,
      lastActivity: "3 days ago",
      status: "attention_needed",
      mentorNotes: "Missing recent assignments, needs guidance"
    },
    {
      id: 4,
      name: "Emily Chen",
      rollNumber: "CS2024004",
      year: "Final Year",
      semester: "8th",
      overallScore: 90,
      globalRank: 12,
      completedAssignments: 30,
      pendingAssignments: 5,
      averageScore: 88,
      lastActivity: "5 hours ago",
      status: "active",
      mentorNotes: "Consistent performer, good leadership potential"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'attention_needed':
        return 'bg-red-100 text-red-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getRankColor = (rank: number) => {
    if (rank <= 10) return 'text-yellow-600';
    if (rank <= 30) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {mentorData.name}</h1>
                <p className="text-sm text-gray-600">{mentorData.position} • {mentorData.department}, {mentorData.college}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                Academic Access
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
            <TabsTrigger value="students" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>My Students</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Class Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Assignments</span>
            </TabsTrigger>
            <TabsTrigger value="mentoring" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Mentoring</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-blue-600">{students.length}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Students</p>
                      <p className="text-2xl font-bold text-green-600">{students.filter(s => s.status === 'active').length}</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Need Attention</p>
                      <p className="text-2xl font-bold text-orange-600">{students.filter(s => s.status === 'attention_needed').length}</p>
                    </div>
                    <Target className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Class Score</p>
                      <p className="text-2xl font-bold text-purple-600">89%</p>
                    </div>
                    <Award className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Students Table */}
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Student Performance Overview</span>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search students..."
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
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Roll Number</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Assignments</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-sm text-gray-500">{student.year} • {student.semester} Sem</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{student.rollNumber}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className={`font-bold ${getRankColor(student.globalRank)}`}>#{student.globalRank}</span>
                              <span className="text-sm text-gray-500">Global</span>
                            </div>
                            <div className="text-sm font-medium text-green-600">{student.overallScore}% Score</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm font-medium">{student.completedAssignments} Completed</div>
                            <div className="text-sm text-red-600">{student.pendingAssignments} Pending</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(student.status)}>
                            {student.status.replace('_', ' ').charAt(0).toUpperCase() + student.status.replace('_', ' ').slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Class Performance Analytics</CardTitle>
                <CardDescription>
                  Detailed insights into your students' coding performance and progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard Coming Soon</h3>
                  <p className="text-gray-600">Comprehensive analytics for class performance tracking.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Assignment Management</CardTitle>
                <CardDescription>
                  Track and manage coding assignments for your students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Assignment Dashboard Coming Soon</h3>
                  <p className="text-gray-600">Create, assign, and track coding assignments.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentoring">
            <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Student Mentoring</CardTitle>
                <CardDescription>
                  Provide guidance and feedback to your students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mentoring Tools Coming Soon</h3>
                  <p className="text-gray-600">Communication and mentoring tools for student guidance.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentorDashboard;
