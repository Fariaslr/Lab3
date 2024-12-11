function getDaysInMonth(month: number | string, year: number): number | void {
    if (year < 1 || year > 3000) {
      console.log("Erro: O ano deve estar entre 1 e 3000.");
      return;
    }

    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    
    let monthIndex: number;
    if (typeof month === "number") {
      if (month < 1 || month > 12) {
        console.log("Erro: O mês deve ser um número entre 1 e 12.");
        return;
      }
      monthIndex = month - 1;
    } else if (typeof month === "string") {
      monthIndex = months.findIndex((m) => m.toLowerCase() === month.toLowerCase());
      if (monthIndex === -1) {
        console.log("Erro: O mês fornecido não é válido. Use números de 1 a 12 ou abreviações como 'Jan', 'Fev', etc.");
        return;
      }
    } else {
      console.log("Erro: O mês deve ser um número ou uma string válida.");
      return;
    }
  
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (monthIndex === 1) { 
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      return isLeapYear ? 29 : 28;
    }
  
    return daysInMonth[monthIndex];
  }
  
  console.log(getDaysInMonth(2, 2024));
  console.log(getDaysInMonth("Fev", 2023)); 
  console.log(getDaysInMonth(4, 2021)); 
  console.log(getDaysInMonth("Out", 2020)); 
  console.log(getDaysInMonth(13, 2021)); 
  console.log(getDaysInMonth("Invalid", 2021)); 
  console.log(getDaysInMonth("Abr", 3001)); 
  