# Frontend Repository

## Requirements

Als STI-Consulting, möchten wir die Anmelder für das Assessment Center vorselektieren. 

Anforderungen: 
* Es muss die Rolle Employer für den Arbeitgeber geben 
	* Dieser kann eine neues Projekt anlegen.
		* Ein Projekt hat einen Link, mit den man sich auf das Projekt bewerben kann. 
		* Ein Projekt kann Tags haben, falls man danach suchen darf. 
		* Der Employer kann seine eigenen Projekte sein 
		* Die Details von dem Projekt kann vom Employer bearbeitet werden. 
			* Davon betroffen sind die Infos und Beschreibungen des Projektes. 
			* Davon Betroffen sind die Fragen an die Bewerber und die Antwortmöglichkeiten. 
		* Der Employer kann sehen wer sich für das Projekt beworben hat und welche Antworten diese Person angegeben hat. 
* Es muss die Rolle Applicant für den Teilnehmer geben.
	* Applicants können sich für Projekte bewerben. 
	* Applicants können ihre Bewerbungen betrachten. 
	* Applicants können an Employerfragen hinterlassen. 
	* Applicants können nach Events suchen.
	
## Tech-Stack
### Backend
* Java & Spring
* JDK 17
* Spring Security für Rollen (Employer, Applicant)
* Authentication → Form Based Authentication
* JPA
* Postgresql (über Docker)
### Frontend
* React
* NextJS - code splitting, server side rendering
### Koummunikation
* REST

## Architecture
// TODO
	
