import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, Select, MenuItem, FormControl, InputLabel, Box, Card, CardContent, Typography } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import './Newpage.css'



const InsightsPage = () => {
    const navigate = useNavigate();
    //sample data
  const students = [
    { id: 1, name: "Siddharth Batra", department: "CSE", role: "Software Engineer", 
        company: "Microsoft",package: "45 LPA",
            preparation: "Focused on DSA and system design. Solved 300+ Leetcode problems.",
            process: "1 Online test (2 coding questions), 3 technical interviews (DSA, system design, projects), 1 HR round",
            advice: "Practice coding under time constraints. Be thorough with your projects and expect deep dives.",
            tags: ["DSA", "System Design", "Coding"] 
    },
    { id: 2, name: "Priya Patel", department: "EE", role: "Hardware Engineer", company: "Texas Instruments" ,package:"30 LPA",
        preparation: 'Practiced ML coding (NumPy from scratch), reviewed ML theory, 150+ Leetcode',
        process: '1 Take-home ML assignment, 3 technical interviews (ML, DSA, systems)',
        advice: 'Be ready to implement algorithms from scratch. Know your ML fundamentals very well.',
        tags: ['ML', 'DSA', 'Systems']},
    {
        id: 3,
        name: "Amit Singh",
        department: "ME",
        role: "Mechanical Engineer",
        company: "TATA Motors",
        package: "18 LPA",
        preparation: "Focused on core mechanical concepts and GD topics.",
        process: "Technical test + 2 interview rounds",
        advice: "have fun",
        tags: ["Core", "Thermodynamics"]
      },
      {
        id: 4,
        name: "Neha Gupta",
        department: "CSE",
        role: "Data Scientist",
        company: "Google",
        package: "32 LPA",
        preparation: "Studied ML algorithms and practiced Kaggle datasets.",
        process:"jist of toughness",
        advice: "be chaapu",
        tags: ["Machine Learning", "Python"]
      },
      {
        id: 5,
        name: "Paras Sikarwar",
        department: "CHE",
        role: "Product Manager",
        company: "Meesho",
        package:"31 LPA",
        preparation:"product understanding",
        process:"interviews and GD",
        advice:"stay calm",
        tags:["fitness","creativity"]
      },
      {
        id: 6,
        name: "Ruby Gupta",
        department: "EE",
        role: "Chip Specialist",
        company: "Nvidia",
        package:"50 LPA",
        preparation:"Practise the core concepts",
        process:"interviews and projects",
        advice:"believe in yourself",
        tags:["semiconductor","nanotech"]
        
      },
      { id: 7, name: "priyanka Grover", department: "EE", role: "Hardware Engineer", company: "Microsoft",package:"",
        preparation:"",
        process:"",
        advice:"",
        tags:[] },
      { id: 8, name: "Omika", department: "CSE", role: "Data Scientist", company: "Google",package:"",
        preparation:"",
        process:"",
        advice:"",
        tags:[] }
    
  ];

  // State for filters
  const [filters, setFilters] = useState({
    department: '',
    role: '',
    company: ''
  });

  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [filteredStudents, setFilteredStudents] = useState(students);

  // Apply filters
  const applyFilters = () => {
    const result = students.filter(student => {
      return (
        (!filters.department || student.department === filters.department) &&
        (!filters.role || student.role === filters.role) &&
        (!filters.company || student.company === filters.company)
      );
    });
    setFilteredStudents(result);
    setFilterDialogOpen(false);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      department: '',
      role: '',
      company: ''
    });
    setFilteredStudents(students);
    setFilterDialogOpen(false);
  };

  return (
    <div>
        <div class="header">
        <h1>SPO Placement Insights</h1>
        <img src="https://www.iitk.ac.in/smss/post/spo_2021/featured.png"  />
        </div>
        <h3>Delve into past year's Students' Placement Statistics</h3>
    <Box sx={{ p: 3 }}>
      {/* Filter Button */}
      <Button class="yoyo"
        variant="outlined" 
        startIcon={<FilterList />}
        
        onClick={() => setFilterDialogOpen(true)}
        sx={{ mb: 3}}
      >
        Filter according to your needs
      </Button>

      {/* Filter Dialog */}
      <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
        <DialogTitle>Filter Students</DialogTitle>
        <DialogContent sx={{ p: 3, minWidth: 300 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Department</InputLabel>
            <Select
              value={filters.department}
              onChange={(e) => setFilters({...filters, department: e.target.value})}
              label="Department"
            >
              <MenuItem value="">All Departments</MenuItem>
              <MenuItem value="CSE">Computer Science</MenuItem>
              <MenuItem value="EE">Electrical</MenuItem>
              <MenuItem value="ME">Mechanical</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              value={filters.role}
              onChange={(e) => setFilters({...filters, role: e.target.value})}
              label="Role"
            >
              <MenuItem value="">All Roles</MenuItem>
              <MenuItem value="Software Engineer">Software Engineer</MenuItem>
              <MenuItem value="Hardware Engineer">Hardware Engineer</MenuItem>
              <MenuItem value="Data Scientist">Data Scientist</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Company</InputLabel>
            <Select
              value={filters.company}
              onChange={(e) => setFilters({...filters, company: e.target.value})}
              label="Company"
            >
              <MenuItem value="">All Companies</MenuItem>
              <MenuItem value="Microsoft">Microsoft</MenuItem>
              <MenuItem value="Texas Instruments">Texas Instruments</MenuItem>
              <MenuItem value="Google">Google</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={resetFilters}>Reset</Button>
            <Button variant="contained" onClick={applyFilters}>Apply</Button>
          </Box>
        </DialogContent>
      </Dialog>

      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredStudents.map(student => (
          <Card 
            key={student.id}
            sx={{ 
              width: '100%',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: 3,
                backgroundColor: '#f5f5f5'
              }
            }}
            onClick={() => navigate(`/insights/${student.id}`, { state: { student } })}>
            <CardContent  >
              <Typography variant="h6">{student.name}</Typography>
              <Typography color="text.secondary">
                {student.department} • {student.role} • {student.company}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </div>
  );
};

export default InsightsPage;