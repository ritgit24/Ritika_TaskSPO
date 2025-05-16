# React + Vite- Submitted by Ritika Batra, 240876

I have attempted task 1 - SPO Student Page Clone + Insight Section Redesign.

Explaining the UI structure : 
I have redesigned the SPO For Student page in React JS while adding special filter feature to the Insights section and deployed my react Application on Vercel.
Here is the link to my vercel : https://ritika-task-spo.vercel.app/  
My application contains a home page  ( https://ritika-task-spo.vercel.app/ )  which has 3 buttons to it-Login,Signup, For Students. Focusing on the frontend part which was the requirement of task-1, The button - FOR STUDENTS leads to the next page (https://ritika-task-spo.vercel.app/newpage)  which provides various tips to students who are yet to appear for placements. This page contains a NavBar at the top and various other components on the entire screen.
The NavBar also contains 5 buttons which again lead to different pages(Like About-IITK,For Companies,etc.).However I have not added any detail to these pages.
Below the NavBar lie 5 buttons, namely- Insights, Resources, Roadmaps, Procedures, FAQs . 
Each of the buttons lead to a new page with some sample data, which has been added as a template for the UI by me.
For Resources, Roadmaps, Procedures and FAQs , I have kept the format simpler.
The insights page ( https://ritika-task-spo.vercel.app/insightshehe ) contains the data of the previously placed students. However, I have added a special feature-FILTER FEATURE to the insights section which helps the upcoming students filter the placement data accordinng to their needs.
The filter applies on 3 bases : DEPARTMENT, ROLE, COMPANY.  
Clicking on a student's name leads to a new page [for example- https://ritika-task-spo.vercel.app/insights/1 ] containing the information of that particular student which displays - STUDENT NAME, DEPARTMENT, ROLE, COMPANY, PACKAGE, PROCESS, PREPARATION,ADVICE,TAGS.
The page has detailed Student View: Shows comprehensive placement details for a single student and includes back button to return to the main insights list

Explaining the code : 
My routing file is App.jsx . I have created various components for my page and stored them in "components" folder in src folder. I have imported these components to App.jsx using useNavigate hook. 

In my page For Students, I have used Material UI . The components of MUI used were :- AppBar, Toolbar, Typography, Button, IconButton, Drawer,List,  ListItem, ListItemText, Divider,  useMediaQuery, useTheme,  Container , MenuIcon.
I used Appbar, Typography, IconButton, ListItem, Divider and ToolBar to make the NavBar.

In the Insights page , I used the Button, Dialog, DialogTitle, DialogContent, Select, MenuItem, FormControl, InputLabel, Box, Card, CardContent, Typography components from MUI to display the names on clickable cards.
I used FilterList from '@mui/icons-material' to make the filter feature.
I have hardcoded an array of student objects to display their data.
In a nutshell, this page :
1.Student Data Display: Shows cards with student placement information
2.Filtering System: Allows filtering by department, role, and company
3.Navigation: Clicking a card navigates to a detailed view.
In the code :
Filter states:
filters: Tracks current filter selections (department, role, company)
filterDialogOpen: Controls filter dialog visibility
filteredStudents: Stores the filtered list of students
Filter Functions :
applyFilters(): Filters students based on current selections
resetFilters(): Clears all filters and resets to full list
Clicking a card navigates to /insights/[id] with student data passed via state.

The next page which appears by clicking on any name card uses useLocation to access route state containing student data. The page extracts student object from location.state.  The page uses Material-UI's sx prop for styling. It has consistent spacing with mb (margin-bottom) and mt (margin-top). Paper component provides card-like elevation . Chips used for compact information display. Responsive flex layout for tags. 





