function questionCorrectionBot(question) {
	let q = question.trim()
	let space_pattern = /\s\s+/g
	let comma_fix = /\s+,\s+/g
	let question_marks = /\?+/
	q = q.replace(space_pattern, e => " ")
	q = q.replace(/\,/g, e=>", ")
	q = q.replace(comma_fix, e=> ", ")
	q = q.replace(question_marks, e=> "?")
	correc_question = q[0].toUpperCase() + q.slice(1)
	return correc_question

}

let [q1] = [" this isn't a   relevant    question , is it??? "]

questionCorrectionBot(q1)
