import React, {useState} from 'react';

const useStudent = (initStudents) => {
	const [students] = useState(initStudents);

	const getStudentIndex = (name) => {
		return students.indexOf(name);
	};

	return [getStudentIndex];

}

const App = () => {
	const [names] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);
	const [getStudentIndex] = useStudent(names);
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const index = getStudentIndex(value);
		setResult(index === -1 ? 'NaN' : `${index + 1}`);
	};

	return (
		<div>
			<div>学生一覧：{names.join(', ')}</div>
			<div>検索名前：<input value={value} onChange={handleChange} /></div>
			<button onClick={handleSubmit}>確定</button>
			<div>検索名前：{value}</div>
			<div>位置：{result}</div>
		</div>
	);
}

export default App;
