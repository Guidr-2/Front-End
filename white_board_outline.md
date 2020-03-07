## Login
## Mobile and Web
## App.js layout
## Navigation
## Footer
## authentication setup. 

buttons: update and delete

## Trips 
	update trips
	create trips
	Delete trips

## List of trips pages
	Individual trips

## Will use Formik for forms
## sign up and login link seperate

## Sign up form
	password 
	username

## Login Form
	Create password
	Create username

## Create a profile Form 
	title
	tagline (short description) 
	type of guide specialty
	age and years experience

## Create Trip Form 
	`title` - String
	`description` - String
	`isPrivate` - Boolean
	`isProfessional` - Boolean
	an `images` property
	type determined by your implementation. 
	`duration` - double
	`distance` - double
	`date` - timestamp
	`tripType` - String or Enum	


	

# **Guidr**

### PITCH

Guidr helps back country guides of all types log their private/professional trips. Guides will be able to use Guidr to build their Outdoor Resume. Users can login, create read and update their trips with a trip type, location, duration and whether it's private or professional.

### MVP

1. User can sign up as a "Guide" by providing a unique username and a password that will serve as their login/authentication credentials. (mobile, web)
2. User can successfully login as a "Guide" with their login credentials from account creation. (mobile, web)
3. Authenticated "Guide" can access a minimum of two main views:	

(mobile, web): A "Trips" page where they can:	

1. View a list of previous trips they have created. This should provide an overview of each trip.	

2. Select a trip from the list and be presented with a detailed view that displays all of the trip's properties.	

3. Create a trip. A "trip" must have at a minimum, the following properties:	 

- `title` - String
- `description` - String
- `isPrivate` - Boolean
- `isProfessional` - Boolean
- an `images` property, type determined by your implementation.
- `duration` - double
- `distance` - double
- `date` - timestamp
- `tripType` - String or Enum

4. Update a trip, or any property of a trip.	

5. Delete a trip.	

(mobile, web): A "Profile" page where they can:	

1. Assign values to profile properties via text fields. At a minimum, a "Profile" must have the following: title, tagline (short description), type of guide specialty), age and years experience.	

- `title` - String
- `tagline` - String
- `guideSpecialty` - String
- `age` - Integer
- `yearsExperience` - Integer

2. A version of this "Profile" must be viewable on the web by potential employers, clients, licensing agencies or anyone else that is provided with the URL. (web)

### STRETCH

1. Implement remote storage for `images` with an API of your choice - i.e. Cloudinary, CloudKit, etc. (web, mobile)
2. Based on the "duration" of each trip, in hours, aggregate the trip durations and have a widget that displays how many private and professional hours a "Guide" has across their various categories.
3. Implement a feature that allows a "Guide" to send/print their outdoor resume in PDF format to give to potential employers, guide licensing organizations, etc.


### State 
Guide profiles
Trips
