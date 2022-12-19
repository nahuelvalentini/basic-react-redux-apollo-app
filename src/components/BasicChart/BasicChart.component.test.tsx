import { render, screen } from '@testing-library/react';
import BasicChartComponent from './BasicChart.component';

describe("BasicChart tests", () => {
  it("proves existance", () => {
    render(<BasicChartComponent/>)
    expect(screen.getByText('Created with Highcharts 10.3.2')).toBeInTheDocument()
  })
});
