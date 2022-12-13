import React from "react";


const Blog = () => {
	return (
		<>
			<div>
				<h1 className="fs-5 font-bold  text-center uppercase p-6 m-6 border rounded-full text-6xl">
					{" "}
					Blog section{" "}
				</h1>
			</div>
			<div className="text-justify">
				<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
					<h2 className="fs-5 font-bold  m-3 rounded-3xl capitalize text-center text-6xl">
						what are the different ways to manage a state in a react
						application?
					</h2>
					<p className="text-center  ">
						Managing state in your React apps isn’t as simple as
						using useState or useReducer. Not only are there are a
						lot of different kinds of state, but there often dozens
						of ways of managing each kind. Which should you choose?
						In this guide, we will uncover the several kinds of
						state in your React apps that you might not be aware of,
						plus how to manage them in the most effective way.{" "}
						<br />
						When we talk about state in our applications, it’s
						important to be clear about what types of state actually
						matter. There are four main types of state you need to
						properly manage in your React apps: <br />
						For example, local state would be needed to show or hide
						a modal component or to track values for a form
						component, such as form submission, when the form is
						disabled and the values of a form’s inputs. Global (UI)
						state – Global state is data we manage across multiple
						components. Global state is necessary when we want to
						get and update data anywhere in our app, or in multiple
						components at least.A common example of global state is
						authenticated user state. If a user is logged into our
						app, it is necessary to get and change their data
						throughout our application. Sometimes state we think
						should be local might become global.
					</p>
				</div>
				<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
					<h2 className="fs-5 font-bold  m-3 capitalize rounded-3xl text-center text-6xl">
						what is prototypical inheritance in javascript?
					</h2>
					<p className="text-center  ">
						বাংলায় In English The answer is that these methods come
						built-in within each type of data structure thanks to
						something called prototype inheritance. In JavaScript,
						an object can inherit properties of another object. The
						object from where the properties are inherited is called
						the prototype. <br />
						Here we can say that " animal is the prototype of rabbit
						" or " rabbit prototypically inherits from animal ". So
						if animal has a lot of useful properties and methods,
						then they become automatically available in rabbit .
						Such properties are called “inherited”.May 6, 2022{" "}
						<br />
						Does JavaScript only have prototypical inheritance? When
						it comes to inheritance, JavaScript only has one
						construct: objects. Each object has a private property
						which holds a link to another object called its
						prototype. That prototype object has a prototype of its
						own, and so on until an object is reached with null as
						its prototype.Oct 3 <br />
						What is prototype in JavaScript with example? In
						JavaScript, every function and object has a property
						named prototype by default. For example, function Person
					</p>
				</div>
				<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
					<h2 className="fs-5 font-bold  m-3 capitalize rounded-3xl text-center text-6xl">
						what is the unit test ? why should we write unit test?
					</h2>
					<p className="text-center  ">
						Unit testing is a type of software testing where
						individual units or software components are tested. Its
						purpose is to validate that each unit of code performs
						as expected. A unit can be anything you want it to be —
						a line of code, a method, or a class.Aug 24, 2021 <br />
						What is a unit test Why should write unit tests? The
						main objective of unit testing is to isolate written
						code to test and determine if it works as intended. Unit
						testing is an important step in the development process,
						because if done correctly, it can help detect early
						flaws in code which may be more difficult to find in
						later testing stages. <br />
						What is meant by unit test? A unit test is a way of
						testing a unit - the smallest piece of code that can be
						logically isolated in a system. In most programming
						languages, that is a function, a subroutine, a method or
						property. The isolated part of the definition is
						important. <br />
						When should you write unit tests? For Test-Driven
						Development (TDD), you write unit tests before writing
						any implementation. This makes your implementation
						details in your code shorter and easier to understand.
						In this instance, the best time to write unit tests is
						immediately. For others, most developers write unit
						tests after the code's been written. <br />
						Who should write unit tests? developers Yes, developers
						typically write unit tests. However, they are largely
						responsible for writing these tests to ensure that the
						code works – most developer tests are likely to cover
						happy-path and obvious negative cases.
					</p>
				</div>
				<div className="p-3 m-3 border rounded shadow-md bg-amber-100 text-right  ">
					<h2 className="fs-5 m-3 font-bold capitalize rounded-3xl text-center text-6xl">
						react vs angular vs vue vs svelte?
					</h2>
					<p className="text-center  ">
						How does node handle multiple requests at the same React
						vs Vue vs Angular vs Svelte # react # vue # angular #
						svelte In this article, I'm going to cover which of the
						top Javascript frontend frameworks: React, Vue, Angular,
						or Svelte is the best at certain factors and which one
						is the best for you. There are going to be 5 factors
						which we are going to look at: popularity,
						community/resources, performance, learning curve, and
						real-world examples. Before diving into any of these
						factors, let's take a look at what these frameworks are.
						🔵 React Developed By: Facebook Open-source: Yes
						Licence: MIT Licence Initial Release: March 2013 Github
						Repo: https://github.com/facebook/react Description:
						React is a JavaScript library for building user
						interfaces. Pros: Easy to learn and use Component-based:
						reusable code Performant and fast Large community Cons:
						JSX is required Poor documentation 🟢 Vue Developed By:
						Evan You Open-source: Yes Licence: MIT Licence Initial
						Release: Feburary 2014 Github Repo:
						https://github.com/vuejs/vue Description: Vue.js is a
						progressive, incrementally-adoptable JavaScript
						framework for building UI on the web. Pros: Performant
						and fast Component-based: reusable code Easy to learn
						and use Good and intuitive documentation Cons: Fewer
						resources compared to a framework like React Over
						flexibility at times 🔴 Angular Developed By: Google
						Open-source: Yes Licence: MIT Licence Initial Release:
						September 2016 Github Repo:
						https://github.com/angular/angular Description: Angular
						is a development platform for building mobile and
						desktop web applications using Typescript/JavaScript and
						other languages. Pros: Fast server performance MVC
						Architecture implementation Component-based: reusable
						code Good and intuitive documentation Cons: Steep
						learning curve Angular is very complex 🟠 Svelte
						Developed By: Rich Harris Open-source: Yes Licence: MIT
						Licence Initial Release: November 2016 Github Repo:
						https://github.com/sveltejs/svelte Description: Svelte
						is a new way to build web applications. It's a compiler
						that takes your declarative components and converts them
						into efficient JavaScript that surgically updates the
						DOM. Pros: No virtual DOM Truly reactive Easy to learn
						and use Component-based: reusable code Cons: Small
						community Confusion in variable names and syntax The 1st
						Factor: Popularity All of these options are extremely
						popular and are used by loads of developers. I'm going
						to compare these 4 frameworks in google trends, NPM
						trends, and the Stackoverflow 2020 survey results to see
						which one is the most popular. Note: Remember that
						popularity doesn't mean it has the largest community and
						resources. Google Trends Google trends measures the
						number of searches for a certain topic. Let's have a
						look at the results: Note: React is blue, Angular is
						red, Svelte is gold, Vue is green. Alt Text The image
						above contains the trends for these 4 frontend
						frameworks over the past 5 years. As you can see,
						Angular and React are by far the most searched, with
						React being searched more than Angular. While Vue sits
						in the middle, Svelte is the clear least searched
						framework. Although Google Trends gives us the number of
						search results, it may be a bit deceiving so lets of on
						to NPM trends.
					</p>
				</div>
			</div>
		</>
	);
};

export default Blog;
