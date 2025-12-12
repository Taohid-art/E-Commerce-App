export const loadCard = ()=> {
  if (typeof window === 'undefined') {
    return undefined;
  }
  try {
    const data = localStorage.getItem('card');
    return data ? JSON.parse(data): undefined;
  }
  catch (err)
  {
    console.error("Failed to load card from localStorage", err);
    return undefined;
  }
}
export const saveCard = ( cardData : any) => {
  if (typeof window === 'undefined')
    return undefined;
  try{
     const data = localStorage.setItem('card', JSON.stringify(cardData));
     return data;
  }
  catch (err ){
    console.error("Failed to save card to localStorage", err);
    return undefined;
  }
}