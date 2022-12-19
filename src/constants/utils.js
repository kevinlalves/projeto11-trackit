function handleError(message, details) {
  let errorMsg = "Houveram problemas: \n";
  if (details) {
    for (const detail of details) {
      errorMsg += `${detail}\n`;
    }
  } else {
    errorMsg += `${message}\n`;
  }
  window.alert(errorMsg);
}

function getProgress(habits) {
  if (!habits || !habits.length) {
    return 0;
  }

  let doneHabits = 0;
  for (const habit of habits) {
    if (habit.done) {
      doneHabits++;
    }
  }
  return (doneHabits/habits.length)*100;
}

export { handleError, getProgress };
