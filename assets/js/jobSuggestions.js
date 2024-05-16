// Gemini Api
let heading = ""

let jobSuggestionsDisplayContainer = document.getElementById("jobSuggestionsDisplayContainer");


import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyAd6wVv0I3Ng0BYZWjHLBQK7XmA0PoxdWw";

    const genAI = new GoogleGenerativeAI(API_KEY);

let prompt = "";

async function Search(prompt,heading){
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const md = window.markdownit(); // Create a new instance of markdown-it
    // console.log(md.render(text));
    jobSuggestionsDisplayContainer.innerHTML = `<h1 id="jobSuggestionsDisplayContainerHeading" class="text-2xl font-bold text-blue-600">${heading}</h1><br>${md.render(text)}`;
    jobSuggestionsDisplayContainer.style.justifyContent = "center"
}

document.getElementById("jobSuggestionButton").addEventListener("click",()=>{
    // let skills_dsp = document.querySelectorAll(".skills-items");
    
    prompt = "";
    let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
    //   console.log(skills_dsp);
     heading = "Jobs Suggestion :-"
        skills_dsp.forEach(element=>{
            prompt = prompt + element.innerHTML +" ";
        })
        prompt += "  jobs suggestions with reference links"
        
         Search(prompt,heading);
    
         console.log(prompt);
        
})

document.getElementById("roadmapSuggestionButton").addEventListener("click",()=>{
        
    prompt = "";

    heading = "RoadMap with how you can enhance your skills :-"

    let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
    //   console.log(skills_dsp);
        skills_dsp.forEach(element=>{
            prompt = prompt + element.innerHTML +" ";
        })
        prompt += " Advance roadMap with these skils"
        
         Search(prompt,heading);
        
         console.log(prompt);
        
})















