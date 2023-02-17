const params = [
  {
    name: 'testone',
    feet: 5,
    inches: 7,
    weight: 182,
    expectedoutcomes: {
      bmi: 28.50211628425039,
      category: 'Overweight'      
    },
    realizedoutcomes: {
      bmi: 0,
      category: '',
      pass: false
    }
  },
  {
    name: 'testtwo',
    feet: 6,
    inches: 3,
    weight: 135,
    expectedoutcomes: {
      bmi: 16.872,
      category: 'Underweight'
    },
    realizedoutcomes: {
      bmi: 0,
      category: '',
      pass: false
    }
  },
  {
    name: 'testthree',
    feet: 5,
    inches: 2,
    weight: 210,
    expectedoutcomes: {
      bmi: 38.40530697190427,
      category: 'Obese'
    },
    realizedoutcomes: {
      bmi: 0,
      category: '',
      pass: false
    }
  },
  {
    name: 'testfour',
    feet: 5,
    inches: 10,
    weight: 162,
    expectedoutcomes: {
      bmi: 23.242040816326533,
      category: 'Normal weight'
    },
    realizedoutcomes: {
      bmi: 0,
      category: '',
      pass: false
    }
  }  
];

$("#btn-unit-tests").click(function() {
  params.forEach(item => {
    // Arrange
    document.getElementById(`expected-outcome-${item.name}-bmi`).innerText = item.expectedoutcomes.bmi;
    document.getElementById(`expected-outcome-${item.name}-category`).innerText = item.expectedoutcomes.category;
    document.getElementById('weight-in-pounds').value = item.weight;
    document.getElementById('height-in-feet').value = item.feet;
    document.getElementById('height-in-inches').value = item.inches;

    // Act
    $('#calculate').click();

    // Assert
    document.getElementById(`realized-outcome-${item.name}-bmi`).innerText = item.realizedoutcomes.bmi = document.getElementById('bmi-calculation').innerText;
    document.getElementById(`realized-outcome-${item.name}-category`).innerText = item.realizedoutcomes.category = document.getElementById('bmi-determination').innerText;

    if (item.realizedoutcomes.bmi == item.expectedoutcomes.bmi && item.realizedoutcomes.category == item.expectedoutcomes.category) {
      item.realizedoutcomes.pass = true;
    }
    
    const cardTitle = document.getElementById(`${item.name}-title`);
    
    if (item.realizedoutcomes.pass) {      
      cardTitle.parentNode.classList.add('bg-success');
      cardTitle.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i> Test Passed';      
    }
    else {
      cardTitle.parentNode.classList.add('bg-danger');
            cardTitle.innerHTML = '<i class="fa-solid fa-circle-xmark text-danger"></i> Test Failed';      
    }
  });
});
