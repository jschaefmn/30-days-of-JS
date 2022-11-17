function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  //find tip_percent
  const meal_tip = (meal_cost / 100) * tip_percent;
  
  //find tax percent
  const meal_tax = (tax_percent / 100) * meal_cost;
  
  // find meal total
  const meal_total = Math.round(meal_cost + meal_tip + meal_tax);
  
  console.log(meal_total);
}