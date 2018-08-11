## Warning
- The production version of ```ReactPress``` only works if your WordPress site is installed in root directory. Like ```example.com``` or ```subdomain.example.com``` is okay. But if you want to use it in any child directory like ```example.com/childdir``` then it will not work!
- Also it works only with ```localhost``` version of WordPress during development process.
- This mechanism is completely depended on [WP REST API](https://wordpress.org/plugins/rest-api/) and also [another](https://wordpress.org/plugins/rest-api-filter-fields/) third party plugin. Make sure you have installed them on your ```localhost``` WordPress website during development process. - Don't Worry! It will take care of these two 3rd party plugins itself during production.
- Please follow WP REST API [Documentation](http://v2.wp-api.org/) to interact with your WordPress site.

## Demo
- [Log In](https://reactpress.zonayed.me/wp-admin) and make a post! See it yourself in action!
- [Demo](https://reactpress.zonayed.me)
```
username: user
password: user
```

## Development
- ```ReactPress``` is using proxy to work with WordPress during development process assuming your WordPress site is running under ```localhost```. If you are running your WordPress in different port, then please open ```package.json```, find ```proxy``` and replace your WordPress ```localhost``` URL with your own.  
- Rest of the processes are just like React Application, if you want to start development server:
```
npm start
```
- Use relative link to work with REST API
```
/wp-json/wp/v2/posts?per_page=5
```

## Production
- Just like any other React Application, you can run ```build``` command to get the production version of your application:
```
npm run build
```
- You will find a new directory named as your React Application Project inside ```build``` directory. This will be your WordPress theme. You can make a ```zip``` version of this directory, or you can copy this directory to your WordPress directory.

## Contribution
### Testing
- [Ar Rolin](https://www.facebook.com/ArRolin)
- [Taslim Hossain](https://www.facebook.com/thmilon)
