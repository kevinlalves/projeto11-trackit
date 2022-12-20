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
    return { doneHabits: 0,  progress: 0};
  }

  let doneHabits = 0;
  for (const habit of habits) {
    if (habit.done) {
      doneHabits++;
    }
  }
  const progress = (doneHabits/habits.length)*100;
  return { doneHabits, progress };
}

export { handleError, getProgress };
