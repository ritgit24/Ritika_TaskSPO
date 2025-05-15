import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Chip,
  Button 
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Stats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const student = state?.student;

  if (!student) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Student data not found
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/insights')}
          sx={{ mt: 2 }}
        >
          Back to Insights
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/insightshehe')}
        sx={{ mb: 3 }}
      >
        Back to All Students
      </Button>

      <Typography variant="h4" gutterBottom>
        {student.name}'s Placement Details
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          <Chip label={`Department: ${student.department}`} />
          <Chip label={`Role: ${student.role}`} color="primary" />
          <Chip label={`Company: ${student.company}`} color="secondary" />
          {student.package && (
            <Chip label={`Package: ${student.package} LPA`} variant="outlined" />
          )}
        </Box>

        {student.preparation && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Preparation Strategy
            </Typography>
            <Typography paragraph>
              {student.preparation}
            </Typography>
          </>
        )}

        {student.process && (
          <>
            <Typography variant="h6" gutterBottom>
              Interview Process
            </Typography>
            <Typography paragraph>
              {student.process}
            </Typography>
          </>
        )}

        {student.advice && (
          <>
            <Typography variant="h6" gutterBottom>
              Advice
            </Typography>
            <Typography paragraph>
              {student.advice}
            </Typography>
          </>
        )}

        {student.tags?.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {student.tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" />
              ))}
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Stats;