window.onload=initAll;


function initAll() {

		let save_book=document.getElementById("save_book")
		save_book.addEventListener('click',()=>{

		let name=document.getElementById("Book_name").value;
		let Price=document.getElementById("Book_price").value;
		let pages=document.getElementById("Book_pages").value;
		let url="/save_book?name="+name+"&Price="+ Price +"&pages="+pages;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				if (xhttp.responseText){
					document.getElementById("Book_name").value="";
					document.getElementById("Book_price").value="";
					document.getElementById("Book_pages").value="";
				} 

			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	})
	Displaybook();
}

function Displaybook(){
	
	
	let Showbook =document.getElementById('showbook')
	Showbook.addEventListener('click',()=>{
		url="/getAllbook"
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let div =document.getElementById('nav-profile')
				div.innerHTML="";
				let data=eval(xhttp.responseText);
				
				let table=document.createElement('TABLE');


				let row=table.insertRow(i)
				let name=row.insertCell(0);
				let Price=row.insertCell(1);
				let pages=row.insertCell(2);
				let Clicktodelete=row.insertCell(3);

				name.innerHTML="Book Name";
				Price.innerHTML="Book Price";
				pages.innerHTML="Book of pages";
				Clicktodelete.innerHTML="click to delete"
				for (var i = 0; i < data.length; i++) {

					let row=table.insertRow(i+1)
					let name=row.insertCell(0);
					let Price=row.insertCell(1);
					let pages=row.insertCell(2);
					let deletebook=row.insertCell(3);


					name.innerHTML=data[i].name;
					Price.innerHTML=data[i].Price;
					pages.innerHTML=data[i].pages;
					deletebook.innerHTML="&times;"
					deletebook.className="text-center text-danger "
					deletebook.style.fontSize="25px;"
					deletebook.style.cursor="pointer"
					deletebook.id=data[i].id;
					deletebook.className="DeleteButton";

					deletebook.onclick=()=>{
						let id=deletebook.id;
						
						var xhttp = new XMLHttpRequest();

						let url="/Deletebook?id="+id;

						xhttp.onreadystatechange = function() {
							if (this.readyState == 4 && this.status == 200) {

								table.deleteRow(deletebook.parentNode.rowIndex)
								
							}
						};
						xhttp.open("GET", url, true);
						xhttp.send();


					}

				}
				table.className='table table-striped table-dark text-center'
				div.appendChild(table)

			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();

	})
}


