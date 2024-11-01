import { LineChart as LChart, Line , XAxis, YAxis} from 'recharts';
const LineChart = () => {

    const studentScores = [
        { id: 1, name: 'Alice', mathScore: 78, chemistryScore: 85 },
        { id: 2, name: 'Bob', mathScore: 82, chemistryScore: 88 },
        { id: 3, name: 'Charlie', mathScore: 75, chemistryScore: 79 },
        { id: 4, name: 'David', mathScore: 90, chemistryScore: 92 },
        { id: 5, name: 'Eva', mathScore: 85, chemistryScore: 84 },
        { id: 6, name: 'Frank', mathScore: 88, chemistryScore: 91 },
        { id: 7, name: 'Grace', mathScore: 95, chemistryScore: 87 },
        { id: 8, name: 'Hannah', mathScore: 80, chemistryScore: 82 },
        { id: 9, name: 'Ian', mathScore: 70, chemistryScore: 78 },
        { id: 10, name: 'Jasmine', mathScore: 92, chemistryScore: 90 },
    ];


    return (
        <div className='container mx-auto my-20'>
            <LChart width={800} height={400} data={studentScores}>
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="mathScore" stroke="green"></Line>
                <Line dataKey={"chemistryScore"} stroke="blue"></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;