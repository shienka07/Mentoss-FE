import { Box, Card, Skeleton, Stack } from "@mui/material";

export default function ApplicationItemSkeleton() {
  const skeletonStyle = {
    backgroundColor: "var(--bg-200)",
  };

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
        width: "100%", 
        maxWidth: { xs: "100%" }, 
        minWidth: { xs: 327, sm: 480 },
        p: 2,
      }}
    >
      {/* 프로필 */}
      <Stack direction="row" alignItems="center" spacing={2} mb={1}>
        <Skeleton
          variant="circular"
          width={32}
          height={32}
          sx={skeletonStyle}
        />
        <Box>
          <Skeleton
            width={100}
            height={16}
            sx={{ mb: 0.5, ...skeletonStyle }}
          />
          <Skeleton width={80} height={14} sx={skeletonStyle} />
        </Box>
      </Stack>

      {/* 강의명 */}
      <Skeleton width="90%" height={20} sx={{ mb: 2, ...skeletonStyle }} />

      {/* 버튼 */}
      <Box display="flex" justifyContent="flex-end" gap={1}>
        <Skeleton
          variant="rounded"
          width={80}
          height={30}
          sx={{ borderRadius: "10px", ...skeletonStyle }}
        />
        <Skeleton
          variant="rounded"
          width={80}
          height={30}
          sx={{ borderRadius: "10px", ...skeletonStyle }}
        />
      </Box>
    </Card>
  );
}