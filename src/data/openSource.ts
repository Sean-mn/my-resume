export type Platform = 'github' | 'gerrit'

interface BaseContribution {
  date: string
  title: string
  summary: string
  url: string
  ref: string
}

export interface CodeContribution extends BaseContribution {
  kind?: 'pr'
  status?: string
  additions: number
  deletions: number
  changedFiles: number
}

export interface IssueContribution extends BaseContribution {
  kind: 'issue'
  status: string
}

export type Contribution = CodeContribution | IssueContribution

export interface OpenSourceProject {
  name: string
  owner: string
  url: string
  platform: Platform
  description: string
  contributions: Contribution[]
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'efcore',
    owner: 'dotnet',
    url: 'https://github.com/dotnet/efcore',
    platform: 'github',
    description:
      '.NET 표준 객체-데이터베이스 매퍼로, LINQ 쿼리·변경 추적·스키마 마이그레이션을 지원합니다.',
    contributions: [
      {
        date: '2026.11.03',
        title: 'JSON 엔티티 컬렉션의 잘못된 요소에 대한 예외 메시지 개선',
        summary: 'JSON 엔티티 컬렉션에 null이나 객체가 아닌 요소가 있으면 일반적인 토큰 오류만 던지던 것을, 엔티티 타입과 내비게이션 이름을 담은 예외로 바꾸고 기능 테스트를 추가했습니다.',
        url: 'https://github.com/dotnet/efcore/pull/39485',
        ref: '#39485',
        additions: 127,
        deletions: 1,
        changedFiles: 5,
      },
      {
        kind: 'issue',
        date: '2026.10.31',
        title: 'JSON 구체화 과정에 남은 모호한 토큰 타입 예외 개선 제안',
        summary: '#39485 이후에도 최상위 JSON 컬렉션·루트 토큰 불일치·기본형 컬렉션에서 문맥 없는 "Invalid token type" 예외가 남은 지점과, 이미 지난 토큰 타입을 보고하는 버그를 정리했습니다.',
        url: 'https://github.com/dotnet/efcore/issues/39486',
        ref: '#39486',
        status: '진행 중',
      },
    ],
  },
  {
    name: 'xunit.analyzers',
    owner: 'xunit',
    url: 'https://github.com/xunit/xunit.analyzers',
    platform: 'github',
    description:
      'xUnit.net 테스트 코드의 잘못된 사용을 찾아 고쳐 주는 Roslyn 분석기 모음입니다. 이슈는 xunit/xunit 저장소에서 함께 관리합니다.',
    contributions: [
      {
        status: '리뷰 중',
        date: '2026.11.01',
        title: 'xUnit2023 코드 수정기가 일부 검사 함수를 삭제하는 버그 수정',
        summary: '단일 검사 함수 Assert.Collection을 Assert.Single로 바꾸는 수정기가 처리하지 못하는 형태를 만나면 단언문을 통째로 지우던 문제를, 검사 함수를 보존할 수 있을 때만 수정을 제안하도록 고쳤습니다.',
        url: 'https://github.com/xunit/xunit.analyzers/pull/238',
        ref: '#238',
        additions: 225,
        deletions: 59,
        changedFiles: 2,
      },
      {
        kind: 'issue',
        date: '2026.10.27',
        title: 'xUnit2023 수정기가 일부 검사 함수의 단언문을 삭제하는 문제 제보',
        summary: '괄호 람다·메서드 그룹·지역 대리자·async 람다 등에서 수정기가 단언문을 지우거나 await를 빠뜨리는 사례를 재현해 정리했습니다.',
        url: 'https://github.com/xunit/xunit/issues/3659',
        ref: 'xunit#3659',
        status: '수정 PR 리뷰 중',
      },
    ],
  },
  {
    name: 'rea',
    owner: 'morluto',
    url: 'https://github.com/morluto/rea',
    platform: 'github',
    description:
      '에이전트로 앱 동작부터 네이티브 바이너리까지 리버스 엔지니어링하는 도구입니다.',
    contributions: [
      {
        date: '2026.10.29',
        title: 'Ghidra 가이드의 읽기 전용 작업 수를 실제 레지스트리와 일치하도록 수정',
        summary: '레지스트리에 작업이 추가돼 27개가 됐는데도 설치·Ghidra 가이드에는 26개로 남아 있던 설명을 바로잡고, 실제 실행 기록은 검증하지 않은 내용이 되지 않도록 그대로 두었습니다.',
        url: 'https://github.com/morluto/rea/pull/7794',
        ref: '#7794',
        additions: 4,
        deletions: 4,
        changedFiles: 3,
      },
    ],
  },
  {
    name: 'mockk',
    owner: 'mockk',
    url: 'https://github.com/mockk/mockk',
    platform: 'github',
    description:
      'Kotlin 전용 모킹 라이브러리로, DSL 기반 API를 통해 코루틴·value class 등 Kotlin 고유 기능을 지원합니다. JVM·Android·Native 멀티플랫폼 타깃을 대상으로 합니다.',
    contributions: [
      {
        date: '2026.10.23',
        title: 'mock 제한 검사를 모든 일반 mock 생성 경로에 적용',
        summary: 'mockk<T>()의 타입 파라미터에만 적용되던 제한 클래스 검사를 mockkClass·@MockK·MockKExtension과 추가 인터페이스까지 넓히고, relaxed mock의 자식 mock은 영향받지 않도록 했습니다.',
        url: 'https://github.com/mockk/mockk/pull/1579',
        ref: '#1579',
        additions: 64,
        deletions: 2,
        changedFiles: 3,
      },
    ],
  },
]

export const totalContributions = openSourceProjects.reduce(
  (sum, project) => sum + project.contributions.length,
  0,
)
