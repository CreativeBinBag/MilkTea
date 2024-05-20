import React from 'react';
import './style.css'; 


const instructions = {

  'Assam': {
    
    'Strong': ['Step 1: Boil water - one cup per person', 
               'Step 2: Pour it over Assam tea leaves in a pot - 2 teaspoons per cup.', 
               'Step 3: Let it dance with the tea leaves.', 
               'Step 4: Strain the happy couple (tea and water) into cups.',
               'Step 5: Warm up some milk, but do not let it get too excited.',
               'Step 6: Add milk to tea based on your mood - a splash for a gentle hug, more for a hearty embrace',
               'Step 7: Sweeten the tea if you like. Serve hot.'],


    'Medium': ['Step 1: Make water dance in a pot with joy - one cup per person.', 
               'Step 2: Pour it over Assam tea leaves in a pot - 1.5 teaspoons per cup.', 
               'Step 3: Let it become friends with the tea leaves.', 
               'Step 4: After steeping, strain the tea into cups.',
               'Step 5: A quarter cup of milk for each cup is enough.',
               'Step 6: Add hot milk to the tea.',
               'Step 7: Add sugar if desired, and stir well. Serve hot.'],

    'Delicate': ['Step 1: Begin with boiling water - one for each sipper.', 
               'Step 2: Once boiled, pour the water into a teapot containing the Assam tea leaves - 1 teaspoon per cup', 
               'Step 3: Steep in grace.', 
               'Step 4: After steeping, strain the tea into cups.',
               'Step 5: Warm up milk— just a quarter cup per serving, ensuring it stays demure and composed.',
               'Step 6: Add some color to the tea with milk!',
               'Step 7: Add sugar to taste. Serve hot.'],
    }, 

'Black Tea': {
    
    'Strong': ['Step 1: Get that water in your pot boiling to about 212°F (100°C). One cup for each sipper.', 
               'Step 2: Go for a hearty 1 tablespoon per cup. We are talking strong, so do not be shy.', 
               'Step 3: Let the water dance with the tea leaves.', 
               'Step 4: Strain the liquid into cups.',
               'Step 5: Warm up some milk, but do not let it get too excited.',
               'Step 6: Pour in about 1/4 cup of milk for each cup of tea.',
               'Step 7: Sweeten the tea if you like. Serve hot.'],

    'Medium': ['Step 1: When boiling water, aim for a cozy 200°F (93°C). One cup each serving.', 
               'Step 2: Measure 1 teaspoon per cup. We are finding that sweet spot between strong and delicate.', 
               'Step 3: Time to brew!', 
               'Step 4: Strain the happy couple (tea and water) into cups.',
               'Step 5: Gotta warm up some milk now.',
               'Step 6: Add around 1/5 cup of milk per cup of tea. Feel free to tweak for your taste buds!',
               'Step 7: Sweeten the tea if you like. Serve hot.'],

    'Delicate':['Step 1: Boil at around 185°F (85°C), so the delicate flavors can blossom.', 
               'Step 2: Use 1/2 teaspoon of tea leaves per cup.', 
               'Step 3: Steep for 2 minutes if it is just you and your cup. Extend by 30 seconds for more cups.', 
               'Step 4: Strain the beautiful tea into cups.',
               'Step 5: Warm up some milk, but do not let it get too excited.',
               'Step 6: Add a dash of about 1/6 cup of milk per cup of tea. Find that balance between tea and milk that makes your heart sing.',
               'Step 7: Sweeten the tea if you like. Serve hot.'],

    },

 'Ceylon': {
    
    'Strong':  ['Step 1: Boil water (one cup per serving), and then let it cool for 1 minute. It should be around 212°F (100°C) when it meets the tea leaves.', 
               'Step 2: Add 1 heaping teaspoon of Ceylon tea leaves to a cup.', 
               'Step 3: Let the water dance with the tea leaves.', 
               'Step 4: Strain the beautiful tea into cups.',
               'Step 5: Warm up some milk gently on the stove or in the microwave until it is just hot, not boiling.',
               'Step 6: Add about 1/4 to 1/3 cup of milk per cup of brewed tea.',
               'Step 7: Sprinkle some sugar if you like. Serve hot.'],

    'Medium':  ['Step 1: Bring water to a boil, then wait for about 30 seconds. You want it to be around 200-205°F (93-96°C) for this medium magic.', 
               'Step 2: 1 teaspoon of tea leaves per cup.', 
               'Step 3: Steep in grace.', 
               'Step 4: Strain the liquid into cups.',
               'Step 5: Warm up some milk.',
               'Step 6: add around 1/4 to 1/3 cup of milk per cup of brewed tea. Mix it in for that perfect balance of tea and creaminess.',
               'Step 7: Sweeten the tea if you like. Serve hot.'],

    'Delicate':  ['Step 1: Let the water rest after boiling for about 1 minute. It should be around 190-195°F (88-90°C) for this delicate dance.', 
               'Step 2: Add 1 teaspoon of tea leaves per cup.', 
               'Step 3: Steep!', 
               'Step 4: Strain the liquid into cups.',
               'Step 5: Warm up some milk with care.',
               'Step 6: Add about 1/4 cup of milk per cup of brewed tea. Keep it light and lovely.',
               'Step 7: Sweeten the tea if you like. Serve hot.'],

    },

'Earl Grey': {
    
    'Strong':  ['Step 1: Heat your water (one cup per serving) to a lively 205°F (96°C).', 
               'Step 2: Grab 1.5 teaspoons of Earl Grey goodness for each cup', 
               'Step 3: Let the tea dance in hot water for some time.', 
               'Step 4: Strain the beautiful tea into cups.',
               'Step 5: Warm up some milk.',
               'Step 6: Add about 1/4 cup of creamy milk to each cup.',
               'Step 7: Sprinkle some sugar if you like. Serve hot.'],

    'Medium':  ['Step 1: Keep the water warm at around 200°F (93°C). One cup per serving.', 
               'Step 2: Use a modest teaspoon of Earl Grey per cup.', 
               'Step 3: Allow the tea to mingle in the water.', 
               'Step 4: Strain the tea!',
               'Step 5: Warm up some milk, but do not let it get too excited.',
               'Step 6: Pour in roughly 1 tablespoons of milk for each cup, just enough to make it smooth and delightful.',
               'Step 7: Sprinkle some sugar if you like. Serve hot.'],

    'Delicate':  ['Step 1: Boil water (one cup per serving). Keep things gentle at 195°F (90°C).', 
               'Step 2: A delicate touch calls for just under a teaspoon of Earl Grey per cup.', 
               'Step 3: Allow the tea to steep.', 
               'Step 4: It is time to strain the tea into cups.',
               'Step 5: Take some milk and warm it up a little.',
               'Step 6: Add a splash of milk, about 2 tablespoons per cup, to maintain that delicate balance of flavor.',
               'Step 7: Addsome sugar if you like. Serve hot.'],

     },
};

const Notepad = ( {selected, selectedStrength}) => {
    
  if (!selected || !selectedStrength) {
    return null; 
  }

  
     const selectedInstructions = instructions[selected][selectedStrength];


  return (

    <div className="top">
        How to make {`${(selectedStrength)}`} {`${selected.includes("Tea") ? selected : selected + " Tea"}`}
       <textarea className="paper" readOnly value={selectedInstructions.join('\n')} />
       

    </div>
    
  );
}

export default Notepad;



