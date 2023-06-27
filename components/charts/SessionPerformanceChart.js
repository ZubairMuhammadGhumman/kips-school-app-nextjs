import { useEffect } from "react"
import { Chart } from "chart.js";
export default function SessionPerformanceChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Attendance,Performance", "Course Completion", "Absent", "Late"],
                datasets: [{
                    data: [40, 20, 10, 10, 20],
                    backgroundColor: [
                        "#50CD89",
                        "#009EF7",
                        "#7239EA",
                        "#FFA000",
                        "#C32026",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <div className="sm:flex flex-col justify-center w-full items-center">
            {/* Doughnut chart */}
            <h1 className=" text-[#212529] font-bold text-lg">Session Performance for Current Academic Year</h1>
            <div className='w-full'>
                <canvas height="400" id='myChart'></canvas>
            </div>

        </div>
    )
}


