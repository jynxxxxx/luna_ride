import { forwardRef } from "react";

const DriverFeatureSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div ref={ref} className="mb-8 text-center grid grid-cols-1 grid-cols-[1fr_2fr] gap-4">
        <h1 className="flex flex-col items-center">
          더 많은 수익
        </ h1>
        <div className="flex flex-col items-center">
          <h3>빠른 매칭과 낮은 수수료</h3>
          <div className="text-sm text-zinc-700">
            실시간으로 매칭되는 시스템 덕분에, 기사님은 빠르게 고객과 연결될 수 있습니다.
            <br/>수수료는 15%로 매우 경쟁력 있어, 더 많은 수익을 기사님께 돌려드립니다.
          </div>
        </ div>
      </div>

      <div className="mb-8 text-center grid grid-cols-1 grid-cols-[1fr_2fr] gap-4">
        <h1 className="flex flex-col items-center">
          안전한 운전 환경 제공
        </ h1>
        <div className="flex flex-col items-center">
          <h3>바디캠과 보험 처리</h3>
          <div className="text-sm text-zinc-700">
            기사님에게 제공되는 바디캠은 운전 중 발생할 수 있는 모든 상황을 기록합니다. 
            <br/>이를 통해 사고 발생 시 보험 처리가 원활하게 이루어집니다.
          </div>
        </ div>
      </div>

      <div className="mb-8 text-center grid grid-cols-1 grid-cols-[1fr_2fr] gap-4">
        <h1 className="flex flex-col items-center">
          프리미엄 서비스 혜택
        </ h1>
        <div className="flex flex-col items-center">
          <h3>프리미엄 Pricing 적용</h3>
          <div className="text-sm text-zinc-700">
            프리미엄 서비스를 통해 더 높은 요금을 받고, 더 많은 배차를 받게 됩니다. 
            <br/>기사님은 더 유리한 조건에서 일하며, 더 많은 수익을 올릴 수 있습니다.
          </div>
        </ div>
      </div>
    </>
  )
})

export default DriverFeatureSection;