SELECT
  Incidents.id,
  Incidents.us_state,
  Injuries.Name as Injuries_name, 
  Affected_areas.Name as Affected_areas_name,
  Causes.Name as Causes_name
FROM Incidents
JOIN Injuries ON Incidents.Injury_Id = Injuries.Id
JOIN Affected_areas ON Injuries.Affected_area_Id = Affected_areas.Id
JOIN Causes ON Incidents.Cause_Id = Causes.Id;
