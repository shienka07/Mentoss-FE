// 📄 src/components/LectureDetail/skeleton/MentorProfileSkeleton.jsx

import { Box, Skeleton, Stack } from "@mui/material";

export default function MentorProfileSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="text"
        width={100}
        height={28}
        animation="wave"
        sx={{ bgcolor: "var(--bg-200)" }}
      />

      {/* 프로필 이미지 */}
      <Box display="flex" justifyContent="center" mt={2} mb={1}>
        <Skeleton
          variant="circular"
          width={80}
          height={80}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>

      {/* 닉네임 + 인증 */}
      <Box display="flex" justifyContent="center" gap={1}>
        <Skeleton
          variant="text"
          width={100}
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
        <Skeleton
          variant="circular"
          width={16}
          height={16}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>

      {/* 별점 + MBTI */}
      <Box display="flex" justifyContent="center" gap={1} mt={1}>
        <Skeleton
          variant="text"
          width={40}
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
        <Skeleton
          variant="rounded"
          width={48}
          height={24}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>

      {/* 학력 */}
      <Box display="flex" justifyContent="center" mt={1}>
        <Skeleton
          variant="text"
          width={140}
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>

      {/* 지역 */}
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={1}
        mt={2}
      >
        {[1, 2, 3].map((i) => (
          <Skeleton
            key={i}
            variant="rounded"
            width={64}
            height={24}
            animation="wave"
            sx={{ bgcolor: "var(--bg-200)" }}
          />
        ))}
      </Box>

      {/* AI 분석 박스 */}
      <Box
        mt={3}
        p={2}
        borderRadius="8px"
        sx={{
          background:
            "linear-gradient(90deg, rgba(255, 186, 208, 0.2), rgba(91, 141, 239, 0.2))",
        }}
      >
        <Skeleton
          variant="text"
          width={80}
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
        <Skeleton
          variant="text"
          width="100%"
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
        <Skeleton
          variant="text"
          width="90%"
          height={20}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>

      {/* 멤토 소개 */}
      <Skeleton
        variant="text"
        width={80}
        height={24}
        animation="wave"
        sx={{ mt: 3, bgcolor: "var(--bg-200)" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        animation="wave"
        sx={{ mt: 1, borderRadius: "12px", bgcolor: "var(--bg-200)" }}
      />

      {/* 참본파일 */}
      <Box mt={2}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={48}
          animation="wave"
          sx={{ bgcolor: "var(--bg-200)" }}
        />
      </Box>
    </Box>
  );
}