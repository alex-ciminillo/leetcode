# Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

# The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

# Example 1:


# Input: graph = [[1,2],[3],[3],[]]
# Output: [[0,1,3],[0,2,3]]
# Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
# Example 2:


# Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
# Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
# Example 3:

# Input: graph = [[1],[]]
# Output: [[0,1]]
# Example 4:

# Input: graph = [[1,2,3],[2],[3],[]]
# Output: [[0,1,2,3],[0,2,3],[0,3]]
# Example 5:

# Input: graph = [[1,3],[2],[3],[]]
# Output: [[0,1,2,3],[0,3]]
 

# Constraints:

# n == graph.length
# 2 <= n <= 15
# 0 <= graph[i][j] < n
# graph[i][j] != i (i.e., there will be no self-loops).
# All the elements of graph[i] are unique.
# The input graph is guaranteed to be a DAG.


#first attempt, depth-first-search (DFS) with backtracking, recursion
from typing import List

# def allPathsSourceTarget(graph: List[List[int]]) -> List[List[int]]:
#     target = len(graph) - 1
#     results = []

#     def backtrack(currNode, path):
#             if currNode == target:
#                 results.append(list(path))
#                 return
#             for node in graph[currNode]:
#                 path.append(node)
#                 backtrack(path[-1], path)
#                 path.pop()
    
#     path = [0]
#     backtrack(path[-1], path)

#     return results

# BFS, iteration
def allPathsSourceTarget(graph: List[List[int]]) -> List[List[int]]:
    target = len(graph) - 1
    q = [[0]]
    ans = []

    while q:
        first = q.pop(0)
        if first[-1] == target:
            ans.append(first)
            continue

        for num in graph[first[-1]]:
            q.append(first + [num])

    return ans


graph = [[1,2],[3],[3],[]]
print(allPathsSourceTarget(graph))