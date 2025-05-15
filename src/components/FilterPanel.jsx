import { 
    TextField, 
    MenuItem, 
    Button, 
    Paper, 
    Typography,
    Slider,
    FormControl,
    InputLabel,
    Select,
    Box,
    Divider,
    Checkbox,
    FormControlLabel
  } from '@mui/material';
  import { Clear, FilterAlt } from '@mui/icons-material';
  
  const FilterPanel = ({ filters, setFilters, insights }) => {
    // Get unique values for filters
    const companies = [...new Set(insights.map(i => i.company))].sort();
    const roles = [...new Set(insights.map(i => i.role))].sort();
    const years = [...new Set(insights.map(i => i.year))].sort((a, b) => b - a);
    const departments = [...new Set(insights.map(i => i.department))].sort();
    
    // Package range
    const minPkg = Math.min(...insights.map(i => i.package));
    const maxPkg = Math.max(...insights.map(i => i.package));
  
    const handleChange = (e) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value
      });
    };
  
    const handlePackageChange = (event, newValue) => {
      setFilters({
        ...filters,
        minPackage: newValue[0],
        maxPackage: newValue[1]
      });
    };
  
    const handleCheckboxChange = (e) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.checked
      });
    };
  
    const resetFilters = () => {
      setFilters({
        company: '',
        role: '',
        year: '',
        department: '',
        minPackage: minPkg,
        maxPackage: maxPkg,
        onlyTop: false,
        onlyInternship: false
      });
    };
  
    return (
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FilterAlt color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Filters</Typography>
        </Box>
        
        <TextField
          select
          fullWidth
          label="Company"
          name="company"
          value={filters.company}
          onChange={handleChange}
          margin="normal"
          size="small"
        >
          <MenuItem value="">All Companies</MenuItem>
          {companies.map(company => (
            <MenuItem key={company} value={company}>{company}</MenuItem>
          ))}
        </TextField>
        
        <TextField
          select
          fullWidth
          label="Role"
          name="role"
          value={filters.role}
          onChange={handleChange}
          margin="normal"
          size="small"
        >
          <MenuItem value="">All Roles</MenuItem>
          {roles.map(role => (
            <MenuItem key={role} value={role}>{role}</MenuItem>
          ))}
        </TextField>
        
        <FormControl fullWidth margin="normal" size="small">
          <InputLabel>Year</InputLabel>
          <Select
            name="year"
            value={filters.year}
            onChange={handleChange}
            label="Year"
          >
            <MenuItem value="">All Years</MenuItem>
            {years.map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <TextField
          select
          fullWidth
          label="Department"
          name="department"
          value={filters.department}
          onChange={handleChange}
          margin="normal"
          size="small"
        >
          <MenuItem value="">All Departments</MenuItem>
          {departments.map(dept => (
            <MenuItem key={dept} value={dept}>{dept}</MenuItem>
          ))}
        </TextField>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="subtitle2" gutterBottom>
          Package Range (LPA)
        </Typography>
        <Slider
          value={[filters.minPackage || minPkg, filters.maxPackage || maxPkg]}
          onChange={handlePackageChange}
          valueLabelDisplay="auto"
          min={minPkg}
          max={maxPkg}
          step={1}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="caption">₹{filters.minPackage || minPkg}</Typography>
          <Typography variant="caption">₹{filters.maxPackage || maxPkg}</Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <FormControlLabel
          control={
            <Checkbox
              name="onlyTop"
              checked={filters.onlyTop}
              onChange={handleCheckboxChange}
              size="small"
            />
          }
          label="Only Top-rated Experiences"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              name="onlyInternship"
              checked={filters.onlyInternship}
              onChange={handleCheckboxChange}
              size="small"
            />
          }
          label="Only Internship Converted"
        />
        
        <Button
          variant="outlined"
          startIcon={<Clear />}
          onClick={resetFilters}
          fullWidth
          sx={{ mt: 2 }}
          size="small"
        >
          Reset All Filters
        </Button>
      </Paper>
    );
  };
  
  export default FilterPanel;