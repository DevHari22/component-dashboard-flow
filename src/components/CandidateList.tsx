
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, Mail } from 'lucide-react';

const candidates = [
  { id: 1, name: 'John Doe', email: 'john.doe@email.com', position: 'Software Engineer', score: 92, status: 'Shortlisted' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com', position: 'Product Manager', score: 88, status: 'In Review' },
  { id: 3, name: 'Mike Johnson', email: 'mike.j@email.com', position: 'UI/UX Designer', score: 85, status: 'Hold' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah.w@email.com', position: 'Data Analyst', score: 78, status: 'Rejected' },
  { id: 5, name: 'David Brown', email: 'david.b@email.com', position: 'DevOps Engineer', score: 91, status: 'Shortlisted' },
];

const CandidateList: React.FC = () => {
  const getStatusBadge = (status: string) => {
    const statusColors = {
      'Shortlisted': 'bg-green-100 text-green-800',
      'In Review': 'bg-blue-100 text-blue-800',
      'Hold': 'bg-orange-100 text-orange-800',
      'Rejected': 'bg-red-100 text-red-800',
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Candidate List</h2>
        <p className="text-gray-600 mt-1">Manage and review all job applications</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Candidate Name</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold">Position</TableHead>
              <TableHead className="font-semibold">Score</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id} className="hover:bg-gray-50 transition-colors duration-200">
                <TableCell className="font-medium">{candidate.name}</TableCell>
                <TableCell className="text-gray-600">{candidate.email}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>
                  <span className={`font-semibold ${
                    candidate.score >= 90 ? 'text-green-600' :
                    candidate.score >= 80 ? 'text-blue-600' :
                    candidate.score >= 70 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {candidate.score}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusBadge(candidate.status)}>
                    {candidate.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="hover:bg-blue-50">
                      <Eye size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-50">
                      <Download size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-orange-50">
                      <Mail size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CandidateList;
