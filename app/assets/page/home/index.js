// console.log('test')
require('../../froala-editor')

$(function(){
  $('#edit').froalaEditor({
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'emoticons', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarButtonsXS: null,
    toolbarButtonsSM: null,
    toolbarButtonsMD: null
  })
});