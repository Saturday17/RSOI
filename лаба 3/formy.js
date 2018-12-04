  const info = [];

  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').className = 'modal';
  });

  document.getElementById('back').addEventListener('click', () => {
    document.getElementById('modal').className = 'modal';
  });

  document.getElementById('form').addEventListener('submit', () => {
    let infoItem = {};

    infoItem['name'] = document.getElementById('name').value;
    const yesChecked = document.getElementById('yes').checked;
    const notChecked = document.getElementById('not').checked;
    if (yesChecked){
    	infoItem['RB'] = 'Да';
    }else {
    	infoItem['RB'] = 'Нет';
    }
    infoItem['RB'] = document.getElementById('yes').checked ? 'Да' : 'Нет';
    infoItem['country'] = document.getElementById('country').value;
    const s1Checked = document.getElementById('s1').checked;
    const s2Checked = document.getElementById('s2').checked;
    const s3Checked = document.getElementById('s3').checked;

    if (s1Checked) {
      infoItem['category'] = 'скидка на визу';
    } else if (s2Checked) {
      infoItem['category'] = 'страховка';
    } else if (s3Checked) {
      infoItem['category'] = 'разговорник';
    } else {
    	infoItem['category'] = 'не пользовался бонусами';
    }

    infoItem['comments'] = document.getElementById('comments').value;

    info.push(infoItem);

    document.getElementById('form').reset();
    document.getElementById('modal').className = 'modal active';

    let tbody = '';

    info.forEach(item => {
      tbody += `<tr>
       <td> ${item.name} </td>
       <td> ${item.RB} </td>
       <td> ${item.country} </td>
       <td> ${item.category} </td>
       <td> ${item.comments} </td>
       </tr>`;
    });
    tbody += '';

    document.getElementById('tbody').innerHTML = tbody;

    return false;
  });