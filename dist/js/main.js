var current_element; //menampung objek yang sedang ditangani

function addThought()
{
	thought = $( '#input_thought' ).val();
	element = $( "<li><a href='#'>" + thought + "</a></li>" );
	$( '#thought_list' ).prepend(element);
	applyListener(element); //ini biar konten yang baru di apply jg listenernya
	$( '#input_thought' ).val('')
}

function applyListener(obj)
{
	obj.click(function(){
		$( '#modal_confirm' ).modal('show');
		current_element = $(this);
	});
}

function removeThought(objThought)
{
	$(objThought).remove();
}		

function start()
{
	//set listener untuk button
	$( '#btn_add' ).click(function(){
		addThought();
	});
	
	$( '#btn_edit' ).click(function(){
		$( '#modal_edit' ).modal('show');
		$( '#edit_text' ).val($(current_element).text());
		$( '#modal_confirm' ).modal('hide');
	});
	
	$( '#btn_delete' ).click(function(){
		removeThought(current_element);
		$( '#modal_confirm' ).modal('hide');
	});
	
	$( '#btn_save' ).click(function(){
		content = $( '#edit_text' ).val();
		el_container = "<a href='#'>" + content + "</a>";
		$(current_element).html(el_container);
		$( '#modal_edit' ).modal('hide');
	});
	
	//set listener enter untuk textbox
	$( '#input_thought' ).keypress(function(key){
		if(key.which == 13)
		{
			addThought();
		}
	});
	
	//set listener untuk tiap item awal di list
	all_entry_in_list = $( 'ul#thought_list > li' ); //capture seluruh el <li> di list
	applyListener(all_entry_in_list);
}

start();