export default function MainHomePage(){
return(
    <div className="MainPage p-5">
    <h1>Tailwind CSS-Based Framework</h1>
    <br />
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </h4>

    <div className="collapse collapse-arrow bg-base-200 m-5 mt-10">
<input type="radio" name="my-accordion-2" checked="checked" /> 
<div className="collapse-title text-xl font-medium">
Click to open this one and close others
</div>
<div className="collapse-content"> 
<p>hello</p>
</div>
</div>
<div className="collapse collapse-arrow bg-base-200 m-5">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title text-xl font-medium">
Click to open this one and close others
</div>
<div className="collapse-content"> 
<p>hello</p>
</div>
</div>
<div className="collapse collapse-arrow bg-base-200 m-5">
<input type="radio" name="my-accordion-2" /> 
<div className="collapse-title text-xl font-medium">
Click to open this one and close others
</div>
<div className="collapse-content"> 
<p>hello</p>
</div>
</div>
  </div>
);
};