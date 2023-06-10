# Pros before Bros

Built by [Nui](https://github.com/NuiSuriya), [Tessa](https://github.com/DelicaTessa), [Ornella](https://github.com/0rnella) (and chatGPT) for the [SheSharp](https://www.shesharp.co/) hackathon 2023.

## About

We often hear the stat: [women tend to apply to jobs only when they meet all the qualifications, while men will apply if they only meet 60%](https://www.forbes.com/sites/womensmedia/2014/04/28/act-now-to-shrink-the-confidence-gap/). 

The answer is often, strangely: women, underrepresented candidates, get over your _impostor syndrome_, and apply!

But why should minoritized applicants have to do all the work? We decided to flip the script a bit, and we made a website that helps companies write more accurate, concise, and inclusive job posts. 

Check out the site we put together today: https://shesharp-hackathon.vercel.app/

## Keyword analysis

First, strip out unnecessary skills and technologies. 

When our user submits a URL to their posting, we run it through [SourceStack](https://sourcestack.co/)'s API (in this case, [just a JSON file](https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json), due to technical issues on the Sourcestack end.) We present our hiring manager with the skills and technologies SourceStack has parsed out of their posting - if there are more than 3 of each, we ask them: **do you really need this many?**


## AI to the rescue

Then, we ask the user to submit their job posting text (ideally, this'd be scraped from the submitted URL, but hey, hackathon, you gotta keep it simple.)

We then ask ChatGPT to compare the job requirements to the description of duties and verify they really match; then to come up with a more concise list, stripping out the fluff.

We present this new list of requirements to the user for their use!

## Learn more

Finally, we send the user to our /about page, to learn more about making their job postings more attractive to a diverse range of applicants. 

## More ideas

We'd have also loved to run the posting through the [gender decoder](https://gender-decoder.katmatfield.com/) API, which identifies male-coded words and suggests equivalent female-coded words. But we decided to keep it at 2 APIs for a one-day project - maybe in the future!
